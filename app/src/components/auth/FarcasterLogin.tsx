import { useMagic } from "../../hooks/MagicProvider";
import Image from 'next/image'
import { useState } from 'react';
const FarcasterLogin = () => {
    const { magic } = useMagic();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [isLoginInProgress, setLoginInProgress] = useState(false);



    const processLogin = async () => {
        const didToken = await magic?.farcaster.login()

        if (!didToken) {
            throw new Error('Magic Farcaster login failed');
        }
        // if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        //     setEmailError(true);
        //   } else {
        //     setLoginInProgress(true);
        //     setEmailError(false);
        //     console.log(magic)
        //     const token = await magic?.auth.loginWithEmailOTP({ email: "usih.anselm@gmail.com" });
        //     // Rehydrates the user session whenever getInfo is invoked
        //     console.log(token)
        //     const metadata = await magic?.user.getInfo();   
    
        //     if (!token || !metadata?.publicAddress) {
        //       throw new Error('Magic login failed');
        //     }
        //     // we dont set token 
        //     // we dont set email

        //     setEmail('');
        //   }
    } 

    return (
        <div className='flex' onClick={async () => await processLogin()}>
            <div className="relative">
            <div className="flex flex-row rounded-lg bg-black text-white pl-32 pr-32 pt-2 pb-2 cursor-pointer space-x-1">
                <div className="flex justify-center">
                    <Image
                        src="/farcaster-icon.svg"
                        width={23}
                        height={23}
                        alt="Farcaster Icon"
                    />
                </div>
                <div className="flex justify-center">Sign In</div>
            </div>

            </div>
        </div>
    )
}

export default FarcasterLogin;