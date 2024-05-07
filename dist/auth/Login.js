"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import "./auth.scss";
import { Authenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
// https://ui.docs.amplify.aws/react/connected-components/authenticator
export default function ({ onSignedIn }) {
    return (_jsx(Authenticator, { loginMechanisms: ["email"], hideSignUp: true, children: _jsx(Authenticated, { onSignedIn: onSignedIn }) }));
}
function Authenticated({ onSignedIn }) {
    useEffect(() => {
        onSignedIn();
    }, []);
    return (_jsx("div", { children: _jsx("h1", { children: "Authenticated" }) }));
}
