import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Feed */}
      {session && <Feed />}

      {/* Modal */}
    </div>
  );
}
