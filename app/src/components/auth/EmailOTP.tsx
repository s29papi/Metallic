import { useMagic } from "../../hooks/MagicProvider";
import { Mail } from 'lucide-react';
import { providerToSmartAccountSigner } from 'permissionless';
import { Safe4337Pack } from '@safe-global/relay-kit';
import { useState } from 'react';
const EmailOTP = () => {
    const { magic } = useMagic();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [isLoginInProgress, setLoginInProgress] = useState(false);

    const handleKeyDown = async (e: any) => {
        if (e.key === 'Enter') {
            await processLogin(email);
        }
    };

    const processLogin = async (email: string) => {
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setEmailError(true);
          } else {
            setLoginInProgress(true);
            setEmailError(false);
           
            
            const token = await magic?.auth.loginWithEmailOTP({ email: "usih.anselm@gmail.com" });
            // Rehydrates the user session whenever getInfo is invoked
       
            const metadata = await magic?.user.getInfo();   
       
            if (!token || !metadata?.publicAddress) {
              throw new Error('Magic login failed');
            }
            console.log("signer address, ", metadata?.publicAddress)
            if (!magic) return;
            const pimlicoKey = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`
            const magicProvider = await magic.wallet.getProvider();
            const userInfo = await magic.user.getInfo();
            const smartAccountSigner =
              await providerToSmartAccountSigner(magicProvider);
        
            // To-do
            // users on any network should be able to pay for gas with erc-20
            const safe4337Pack = await Safe4337Pack.init({
              provider: magicProvider,
              signer: smartAccountSigner.publicKey,
              bundlerUrl: pimlicoKey, 
              options: {
                owners: [userInfo.publicAddress ?? ''],
                threshold: 1
              },
            })
            const suppAddr = await safe4337Pack.protocolKit.getAddress()
            console.log("Supposed smart account address, ", suppAddr)
            // test to see if you can get the safe smart account address

            // we dont set token 
            // we dont set email

            setEmail('');
          }
    } 

    return (
        <div className='flex flex-col pt-10 '>
            <div className="flex  text-xs pb-3">Email Address</div>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-4 h-4 text-gray-500" />
            </div>
            <input
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                disabled={isLoginInProgress}
                onKeyDown={async (e) => await handleKeyDown(e)}
                type="email"
                className="text-xs w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-[#F0F0FF]"
                placeholder="Email"
            />
            </div>
        </div>
    )
}

export default EmailOTP;