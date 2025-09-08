import { SignUp } from '@clerk/nextjs';

export default function SignupPage() {
    return (
        <div className="flex flex-col h-100 mt-17 mb-10">
            <div className="m-auto">
                <SignUp />
            </div>
        </div>
    )
}
