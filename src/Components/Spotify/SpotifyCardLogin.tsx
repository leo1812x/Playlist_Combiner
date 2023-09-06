function SpotifyCardLogin(){
    // const CLIENTID = "4562fd44f63c4f0cb8522b0e4f9e95c9";
    // const CLIENTSECRET = "e803c356af9e4a92bd740dedd38c0ce1";

    const loggedin = false;

    return (
    <div
    id="SpotifyCardLogin">
        <p>Spotify Card</p>
        {loggedin == false && 
            <>
                <p>Username</p>
                <input type="text" />

                <p>Password</p>
                <input type="password"/>
            </>
        }
    </div>)

        
}

export default SpotifyCardLogin;