
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId="930280719874-80e5d142rd3rdg7jhhvrkepuirrttfeu.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId} >
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
