import Head from "next/head";
import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  const [id, setId] = useState("");
  const [secret, setSecret] = useState("");

  // useEffect(() => {
  //   setId(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
  //   setSecret(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET);

  //   console.log(`
  //   ID: ${id}
  //   Secret: ${secret}
  //   `);
  // });
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
    </div>
  );
}
