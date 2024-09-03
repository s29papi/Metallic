import EmailOTP from "./auth/EmailOTP";
import FarcasterLogin from "./auth/FarcasterLogin";

const Login = () => {
    return (
        <div className="flex flex-col p-3">
            <div className="flex text-slg font-bold">🎰 Metallic </div>
            <div className="flex pt-10 text-xl">Login</div>
            <div className="flex pt-3 text-gray-700 text-xs">Sign in to Metallic. Upon signing in, Metallic creates <br/> a smart account that is linked 1-to-1 with your chosen <br/> in method. </div>
            <EmailOTP/>
            <div className="flex justify-center pt-4 pb-4 text-gray-700">or</div>
            <FarcasterLogin/>
           

        </div>
    )
}

export default Login;