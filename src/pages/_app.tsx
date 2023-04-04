import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
