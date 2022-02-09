import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { SessionProvider } from "next-auth/react";
import PostModalProvider from "../providers/modals/postmodal.provider";
import AuthProvider from "../providers/auth/auth.provider";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <AuthProvider>
          <PostModalProvider>
            <Component {...pageProps} />
            <Toaster />
          </PostModalProvider>
        </AuthProvider>
      </SessionProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
