"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="m-auto">
        <SignUp

          afterSignUpUrl="/SelectAccount"
          afterSignInUrl="/SelectAccount"
          redirectUrl="/SelectAccount"
        />
      </div>
    </div>
  );
}
