import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex flex-col h-100 mt-17">
      <div className="m-auto">
        <SignIn />
      </div>
    </div>
  )
}