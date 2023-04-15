import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { DM_Sans } from "next/font/google";
import { api } from "~/utils/api";

import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import "~/styles/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <div className={dmSans.className}>
          <Toaster position="bottom-center" />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
