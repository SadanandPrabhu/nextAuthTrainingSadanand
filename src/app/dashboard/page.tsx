import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogOutBtn from "../components/SignOutButton";

export default async function Dashboard() {
  const session = await getServerSession(authOption);
  if (!session?.user?.name) return redirect("/login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 space-y-6 border border-blue-200">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold text-blue-800">Hello, {session.user.name}!</h1>
          <h1 className="text-2xl text-black py-5">Your Email:<br></br>
            {session.user.email}
          </h1>
          <p className="text-gray-600">
            You're logged in to your dashboard. Here you can manage your account and access exclusive content.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <LogOutBtn />
        </div>
      </div>
    </div>
  );
}
