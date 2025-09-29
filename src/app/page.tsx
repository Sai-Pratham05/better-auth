import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignInForm from "./(auth)/sign-in/page";
import SignUp from "./(auth)/sign-up/page";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold flex justify-center items-center gap-4">Welcome to the Home Page</h1>
      <section className="flex flex-col gap-4 md:flex-row items-center justify-center min-h-screen">
        <div>
          <Link href="/sign-in">
            <Button variant="outline">Sign-in</Button>
          </Link>
        </div>

        <div>
          <Link href="/sign-up">
            <Button variant="outline">Sign-up</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
