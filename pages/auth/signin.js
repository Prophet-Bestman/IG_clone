// import { getProviders, signIn } from "next-auth/react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Header from "../../components/Header";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const [loading, setLoading] = useState(false);
  const [signin, setSignin] = useState("login");

  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCredentials({
      ...credentials,
      [e.target.id]: value,
    });
  };

  const handelSignin = (e) => {
    setLoading(true);
    console.log("Signing In");
    e.preventDefault();
    const email = credentials.email;
    const password = credentials.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const user = JSON.stringify(cred.user);
        localStorage.setItem("user", user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    // signIn(provider.id, { callbackUrl: "/" });
    setLoading(false);
  };
  const handleLogin = (e) => {
    console.log("Login In");
    setLoading(true);
    e.preventDefault();
    const email = credentials.email;
    const password = credentials.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const user = JSON.stringify(cred.user);
        localStorage.setItem("user", user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    // signIn(provider.id, { callbackUrl: "/" });
  };

  const handleSwitchToSignup = () => {
    setLoading(false);
    setSignin("signup");
    setCredentials({
      email: "",
      password: "",
    });
  };
  const handleSwitchToLogin = () => {
    setLoading(false);
    setSignin("login");
    setCredentials({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <Header />

      <div>
        <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
          <img className="w-36" src="/instagram.png" alt="" />
          <p className="text-lg uppercase text-gray-500 text-center mx-2 my-3">
            This is not the real app. It is built for portfolio purposes
          </p>
          <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
            <h1 className="text-2xl font-bold text-gray-700">
              {signin === "login" ? "Log In" : "Sign Up"}
            </h1>
            <form
              onSubmit={(e) => {
                signin === "login" ? handleLogin(e) : handelSignin(e);
              }}
              className="mt-8 w-64 flex flex-col"
            >
              <input
                autoFocus
                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="email"
                placeholder="Email"
                type="text"
                value={credentials.email}
                onChange={(e) => handleChange(e)}
              />
              <input
                autoFocus
                className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="password"
                placeholder="Password"
                type="password"
                value={credentials.password}
                onChange={(e) => handleChange(e)}
              />
              {loading ? (
                <button
                  type="submit"
                  disabled
                  className=" text-sm text-center bg-blue-500 hover:bg-blue-600 text-white py-1 rounded font-medium"
                >
                  {signin === "signup" ? "Signing up" : "Loging In"}
                </button>
              ) : (
                <button
                  type="submit"
                  className=" text-sm text-center bg-blue-500 hover:bg-blue-600 text-white py-1 rounded font-medium"
                >
                  {signin === "signup" ? "Sign up" : "Log In"}
                </button>
              )}
            </form>
          </div>
          {signin === "login" && (
            <div className="bg-white border border-gray-300 text-center w-80 py-4">
              <span className="text-sm">Don't have an account?</span>{" "}
              <button
                onClick={handleSwitchToSignup}
                className="text-blue-500 text-sm font-semibold"
              >
                Sign Up
              </button>
            </div>
          )}
          {signin === "signup" && (
            <div className="bg-white border border-gray-300 text-center w-80 py-4">
              <span className="text-sm">Have an account?</span>{" "}
              <button
                onClick={handleSwitchToLogin}
                className="text-blue-500 text-sm font-semibold"
              >
                Log in
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }
