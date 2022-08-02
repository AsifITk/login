import "./App.css";
import {
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./config";
function App() {
  const provider = new GoogleAuthProvider();

  // ! google sign in
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //! twitter
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // !facebook login
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <button
        className="facebook"
        onClick={(e) => {
          signInWithFacebook();
        }}
      >
        Sign in with fb
      </button>
      <button
        className="google"
        onClick={(e) => {
          signInWithGoogle();
        }}
      >
        Sign in with google
      </button>
      <button
        className="twitter"
        onClick={(e) => {
          signInWithTwitter();
        }}
      >
        Sign in with Twitter
      </button>
    </div>
  );
}

export default App;
