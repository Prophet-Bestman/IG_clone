import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center h-[85vh]">
        <img className="w-64" src="/instagram.png" alt="" />
        <p className="text-lg uppercase text-gray-500 text-center mx-2 my-3">
          This is not the real app. It is built for portfolio purposes
        </p>
        <div className="my-6">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 text-white rounded-full py-3 px-5 text-lg font-semibold"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
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
