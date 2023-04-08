import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";

import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <div className={inter.className}>
          <Toaster position="bottom-center" />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
