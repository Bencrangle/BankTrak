import { auth0 } from "../lib/auth0";


export default async function Home() { 
  const session = await auth0.getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-[5rem]">
        BankTrak 
      </h1>
      <p className="text-lg">
        Personal finance tracker
      </p>

      {session?.user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            Welcome, {session.user.name ?? session.user.email}!
          </p>

          <a
          href="/api/auth/logout"
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Log Out
          </a>

        </div>

      ) : (

        <div className="flex flex-col gap-4">
          <a 
          href="/api/auth/login"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Log In
          </a>

          <a
          href="/api/auth/signup"
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Sign Up
          </a>
        </div>
      )}
    </main>
  );
}