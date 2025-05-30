// components/SignOutButton.tsx
"use client";

import { signOut } from "next-auth/react";

export default function LogOutBtn() {
  return (
    <button
      className="w-full bg-white text-black hover:cursor-pointer py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
    >
      Sign Out
    </button>
  );
}
