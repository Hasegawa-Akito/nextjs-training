import { NextPage } from "next";
const authorizeUrl = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/spotify/redirect";
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID ?? "";
const scope =
  "user-read-private user-read-email playlist-read-private playlist-read-collaborative user-modify-playback-state";

const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};

const Login: NextPage = () => {
  const handleButton = () => {
    const state = generateRandomString(16);

    const params = new URLSearchParams({
      response_type: "code",
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      state: state,
    });

    const url = `${authorizeUrl}?${params.toString()}`;

    window.location.href = url;
  };
  return (
    <div>
      <button onClick={() => handleButton()}>login</button>
    </div>
  );
};
export default Login;
