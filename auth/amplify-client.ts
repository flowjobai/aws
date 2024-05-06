import { Amplify } from "aws-amplify";

const config = {
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
            userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
            region: process.env.NEXT_PUBLIC_COGNITO_REGION!,
        },
    },
};

Amplify.configure(config, { ssr: true });
console.log("Cognito configured", config.Auth.Cognito.userPoolId);
