import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div>
      Eventing
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
