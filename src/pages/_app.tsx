import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
          <Toaster position="bottom-center" />
          <Component {...pageProps} />
      </SessionProvider>
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
