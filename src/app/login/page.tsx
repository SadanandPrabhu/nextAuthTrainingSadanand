"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-purple-700 via-pink-500 to-orange-400 flex items-center justify-center overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-2xl animate-pulse"></div>

      <div
        className="relative z-10 w-full max-w-md p-8 text-white bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl"
        style={{
          clipPath:
            "polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)",
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Welcome</h2>
        <p className="text-center text-sm text-white/80 mb-6">
          Login securely using your UAE Pass account
        </p>
        <button
          onClick={() =>
            signIn("uaepass", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
          className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Sign in with UAE Pass
        </button>
      </div>
    </div>
  );
}
