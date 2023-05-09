import {GoogleLogin} from "react-google-login";

const clientId ="980721891546-i3lndig49n8nf5mugbq51e2ltiv16h2v.apps.googleusercontent.com";

function Login(){

    const onSuccess = ()=>{
        console.log("Login Success")
    }

    const onFailure = ()=>{
        console.log("Login Failed")
    }
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login