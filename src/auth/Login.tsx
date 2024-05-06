"use client";

import "./auth.scss";
import "@/amplify-client";
import { Authenticator } from "@aws-amplify/ui-react";
import React, { useEffect } from "react";

interface Props {
    onSignedIn: () => void;
}

// https://ui.docs.amplify.aws/react/connected-components/authenticator
export default function ({ onSignedIn }: Props) {

    return (
        <Authenticator loginMechanisms={["email"]} hideSignUp={true}>
            <Authenticated onSignedIn={onSignedIn} />
        </Authenticator>
    );
}

function Authenticated({ onSignedIn }: Props) {

    useEffect(() => {
        onSignedIn();
    }, []);

    return (
        <div>
            <h1>Authenticated</h1>
        </div>
    );
}
