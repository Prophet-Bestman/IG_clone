import Head from "next/head";
import { useContext, useEffect } from "react/cjs/react.development";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { AuthContext } from "../providers/auth/auth.provider";
// import PostModalProvider from "../providers/modals/postmodal.provider";

export default function Home() {
  const { user, setUser } = useContext(AuthContext);
  console.log("user", user);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [setUser]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />
    </div>
  );
}
