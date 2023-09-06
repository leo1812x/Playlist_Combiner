function YoutubeMusicLogin(){

    const loggedin = false;

    return (
    <div
    id="YoutubeMusicLogin"> 
        <p>Youtube Music</p>
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

export default YoutubeMusicLogin;