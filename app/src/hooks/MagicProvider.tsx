import { Magic as MagicBase } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { FarcasterExtension } from '@magic-ext/farcaster';
import { ReactNode, useEffect, useState, useMemo, createContext, useContext } from 'react';
const { Web3 } = require('web3');
import { createPublicClient, http, PublicClient } from 'viem';

export type Magic = MagicBase<OAuthExtension[] & FarcasterExtension[]>;

type MagicContextType = {
    magic: Magic | null;
    web3: typeof Web3 | null;
};
  
const MagicContext = createContext<MagicContextType>({
    magic: null,
    web3: null,
});
  
export const useMagic = () => useContext(MagicContext);

const MagicProvider = ({ children }: {children: ReactNode}) => {
    const [magic, setMagic] = useState<Magic | null>(null);
    const [web3, setWeb3] = useState<typeof Web3 | null>(null);

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
            // magic -> magic api key && oathextension
            const magic = new MagicBase(process.env.NEXT_PUBLIC_MAGIC_API_KEY as string, {
                extensions: [
                    new OAuthExtension(),
                    new FarcasterExtension()
                ]
            });

            setMagic(magic);
            setWeb3(new Web3((magic as any).rpcProvider));
            // move publicClient out to enable switching of networks
        }
    }, []);

    const value = useMemo(() => {
        return {
          magic,
          web3,
        };
      }, [magic, web3]);

      return <MagicContext.Provider value={value}>{children}</MagicContext.Provider>;
}

export default MagicProvider;