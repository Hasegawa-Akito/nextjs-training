import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const Redirect: NextPage = () => {
  const router = useRouter();
  const code = router.query.code;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID ?? "";
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET ?? "";

  useEffect(() => {
    if (!code) return;
    console.log(Buffer.from(clientId + ":" + clientSecret).toString("base64"));

    const data = new FormData();
    data.append("code", code as string);
    data.append("redirect_uri", "http://localhost:3000/spotify/redirect");
    data.append("grant_type", "authorization_code");

    (async () => {
      try {
        const response = await axios.get("/api/getAccessToken", {
          params: { code: code as string },
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [code]);

  return <div>認証中</div>;
};

export default Redirect;
