const client_id = "";
const client_secret = "";

async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  });
  console.log(await response.json());
  return await response.json();
}
getToken();
/*
async function getPlaylist(access_token) {
  const response = await fetch(
    "https://api.spotify.com/v1/users/Silpharny/playlists",
    {
      method: "POST",
      headers: { Authorization: "Bearer " + access_token },
      body: {
        name: "New Sillist",
        description: "New playlist description",
        public: false,
      },
    }
  );

  return await response.json();
}

getToken().then((response) => {
  getPlaylist(response.access_token).then((profile) => {
    console.log(profile);
  });
});
*/
