import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);

const AuthEnabledApp = withAuthenticator(App);
ReactDOM.render(
  <React.StrictMode>
    <AuthEnabledApp />
  </React.StrictMode>,
  document.getElementById("root")
);
