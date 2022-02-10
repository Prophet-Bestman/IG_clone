import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import PostModal from "../components/PostModal";
import { AuthContext } from "../providers/auth/auth.provider";
import Layout from "../components/Layout";
// import PostModalProvider from "../providers/modals/postmodal.provider";

export default function Home() {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Feed />
        <PostModal />
      </Layout>
    </div>
  );
}
