import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as posenet from "@tensorflow-models/posenet";
import "@tensorflow/tfjs";

type Pose = {
  keypoints: posenet.Keypoint[];
};

export default function Home() {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [poses, setPoses] = useState<Pose[]>([]);

  useEffect(() => {
    const runPoseEstimation = async () => {
      const net = await posenet.load();
      const interval = setInterval(() => {
        detectPose(net);
      }, 100); // 0.1秒ごとに姿勢予測を行う

      // Cleanup function
      return () => {
        clearInterval(interval);
        net.dispose();
      };
    };

    runPoseEstimation();
  }, []);

  const detectPose = async (net: posenet.PoseNet) => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      // ビデオフレームの幅と高さを取得
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // カメラからのビデオデータをCanvasに描画
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      if (canvasRef.current) {
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, videoWidth, videoHeight);
          ctx.drawImage(video, 0, 0, videoWidth, videoHeight);

          // 姿勢予測を実行
          const pose = await net.estimateSinglePose(video, {
            flipHorizontal: false,
          });
          setPoses([pose]);

          // キーポイントを描画
          drawKeypoints(pose, ctx);
        }
      }
    }
  };

  const drawKeypoints = (pose: Pose, ctx: CanvasRenderingContext2D) => {
    ctx.translate(0, 0); // ここに追加
    const keypoints = pose.keypoints;
    keypoints.forEach((keypoint) => {
      //   if (keypoint.score >= 0.3) {
      const { x, y } = keypoint.position;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      //   }
    });
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        mirrored={true}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 9,
          width: 640,
          height: 480,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
          width: 640,
          height: 480,
        }}
      />

      <div style={{ width: "100%", height: "800px" }}></div>
      <div>
        {poses.map((pose, index) => (
          <div key={index}>
            <h2>Pose {index + 1}</h2>
            <ul>
              {pose.keypoints.map((keypoint, keypointIndex) => (
                <li key={keypointIndex}>
                  {keypoint.part}: {keypoint.position.x}, {keypoint.position.y}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
