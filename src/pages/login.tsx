import type { NextPage } from "next";
import { SocialMediaLoginButton } from "~/components/buttons";

const LoginPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 ">
      <p className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text pb-5 text-center text-5xl font-bold tracking-tighter text-transparent">
        Sign In, here to access all your flashcards
      </p>
      <SocialMediaLoginButton helperText="for nerds" provider="discord" />
      {/* <SocialMediaLoginButton helperText="not for nerds" provider="twitter" /> */}
    </div>
  );
};

export default LoginPage;
