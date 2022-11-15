import invariant from "tiny-invariant";

// This function is used for setting using the environment files on both client and server side so only
// set the variables which needs to be exposed on both sides
export function getEnv() {
    //TODO:  Use invariant to check if the environment varaibles are in ".env" files

    return {
        //TODO: Add the environment variables which are needed in server-side and client side as well over here

    };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
    var ENV: ENV;
    interface Window {
        ENV: ENV;
    }
}