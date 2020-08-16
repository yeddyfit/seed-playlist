import React from 'react';
import Button from '@material-ui/core/Button';

const SpotifyAuth = () => {
  const scopes = [
    'user-read-private',
    'playlist-read-private',
    'user-library-read'
  ];

  return (
    <div>
      <p>This is a website that asks Spotify to make you a playlist based on the information you give it. </p>
      <p>Because who said crate digging was dead!</p>
      <p>You'll have to authorise Spotify before you can start making playlists:</p>
      <Button
        variant='outlined'
        color='primary'
        fullWidth
      >
        <a
          href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${
            process.env.REACT_APP_SPOTIFY_CLIENT_ID2
          }&scope=${scopes.join('%20')}&redirect_uri=${encodeURIComponent(
            process.env.REACT_APP_SPOTIFY_CALLBACK_URI
          )}&show_dialog=false`}
        >
          Authorise Spotify
        </a>
      </Button>
    </div>
  );
};

export default SpotifyAuth;
