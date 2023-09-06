function AppleMusicLogin(){

    const loggedin = false;

    return (
    <div
    id="AppleMusicLogin">
        <p>Apple Music Card</p>
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

export default AppleMusicLogin;