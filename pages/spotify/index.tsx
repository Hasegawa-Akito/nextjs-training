import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

const Spotify = () => {
  const router = useRouter();
  console.log(router.query.access_token);
  const access_token = router.query.access_token;

  const getPlayList = useCallback(async () => {
    const playlistId = "6zGbmmoG9Z2aWOy1Q1giQp";
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`, // アクセストークンをヘッダーに設定
          },
        }
      );
      const trackUri = response.data.items[0].track.uri;
      console.log(trackUri);

      await axios({
        method: "PUT",
        url: "https://api.spotify.com/v1/me/player/play",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        data: {
          context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
          offset: {
            position: 5,
          },
          position_ms: 0,
        },
      });
      console.log("音楽再生");
    } catch (e) {
      console.log(e);
    }
  }, [access_token]);
  return (
    <div>
      ログイン成功
      <button onClick={() => getPlayList()}>プレイリスト取得</button>
    </div>
  );
};

export default Spotify;
