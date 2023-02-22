import React from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/utils/firebase";
import * as useDb from "@/utils/database";
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();

function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [usersList, setUsersList] = React.useState({});

  React.useEffect(() => {
    useDb.getData("users", (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setUsersList(data);
      }
    });
  }, []);

  const loginManual = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        useDb.sendData("users", {
          ...usersList,
          [user.uid]: {
            ...usersList[user.uid],
            ...{
              is_online: true,
            },
          },
        });

        localStorage.setItem("user", JSON.stringify(user));

        router.replace("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        useDb.sendData("users", {
          ...usersList,
          [user.uid]: {
            ...usersList[user.uid],
            ...{
              is_online: true,
            },
          },
        });

        localStorage.setItem("user", JSON.stringify(user));
        router.replace("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card p-3 py-5" style={{ width: "400px" }}>
          <h3 className="text-center mb-4">Login Here</h3>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={loginManual}>
              Login
            </button>
          </div>
          <p className="text-center pt-2">Or</p>
          <div className="d-grid">
            <button className="btn btn-danger" onClick={loginGoogle}>
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
