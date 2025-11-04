declare namespace NodeJS {
    interface ProcessEnv {
        readonly TEST: string;
        readonly USER_NAME: string;
        readonly PASSWORD: string;
        
    }
}