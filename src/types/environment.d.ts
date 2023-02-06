export {}
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            RPC_URL: string;
            NETWORK: 'mainnet' | 'testnet';
            API_KEY: string
        }
    }
}
