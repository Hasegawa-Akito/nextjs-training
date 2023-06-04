import axios from "axios";
type SpotifyAuthApiResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
};
const authorize = async (req: { query: { code: string } }, res: any) => {
  const { code } = req.query;

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID ?? "";
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET ?? "";
  console.log(code);
  console.log(clientId);
  console.log(clientSecret);

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code as string);
  params.append("redirect_uri", "http://localhost:3000/spotify/redirect");

  const response = await axios.post<SpotifyAuthApiResponse>(
    "https://accounts.spotify.com/api/token",
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`,
          "utf-8"
        ).toString("base64")}`,
      },
    }
  );

  res.status(200).json({ access_token: response.data.access_token });
};

export default authorize;
