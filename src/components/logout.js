import {GoogleLogout} from "react-google-login";

const clientId ="980721891546-i3lndig49n8nf5mugbq51e2ltiv16h2v.apps.googleusercontent.com";

function Logout(){

    const onSuccess=()=>{
        console.log("logout success")
    } 

    return(
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Login"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout