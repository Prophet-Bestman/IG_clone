import { getProviders, signIn } from "next-auth/react";
import { useState } from "react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  const [loading, setLoading] = useState(false);
  const [signin, setSignin] = useState("login");

  const handelSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Signin");
    // signIn(provider.id, { callbackUrl: "/" });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("login");
    // signIn(provider.id, { callbackUrl: "/" });
  };

  const handleSwitchToSignup = () => {
    setSignin("signup");
  };
  const handleSwitchToLogin = () => {
    setSignin("login");
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
              />
              <input
                autoFocus
                className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="password"
                placeholder="Password"
                type="password"
              />
              <button
                type="submit"
                className=" text-sm text-center bg-blue-500 hover:bg-blue-600 text-white py-1 rounded font-medium"
              >
                Log In
              </button>
            </form>
            {/* <div className="flex justify-evenly space-x-2 w-64 mt-4">
              <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
              <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
                or
              </span>
              <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            </div>
            <button className="mt-4 flex">
              <div className="bg-no-repeat facebook-logo mr-1"></div>
              <span className="text-xs text-blue-900 font-semibold">
                Log in with Facebook
              </span>
            </button>
            <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
              Forgot password?
            </a> */}
          </div>
          {signin === "login" && (
            <div className="bg-white border border-gray-300 text-center w-80 py-4">
              <span className="text-sm">Don't have an account?</span>{" "}
              <button
                onClick={handleSwitchToSignup}
                className="text-blue-500 text-sm font-semibold"
              >
                Sign up
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
          <div className="mt-3 text-center">
            <span className="text-xs">Get the app</span>
            <div className="flex mt-3 space-x-2">
              <div className="bg-no-repeat apple-store-logo"></div>
              <div className="bg-no-repeat google-store-logo"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
