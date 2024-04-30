"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import usersData from "./users.json";
import Header from "../header/Header";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = usersData.users.find(
      (user: any) => user.username === username
    );
    if (!user) {
      setError("User not found");
      return;
    }
    if (user.password !== password) {
      setError("Invalid password");
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    router.push("/accounts");
  };

  return (
    <div className="">
      <div className="h-screen bg-white">
        <div>{error && <p>{error}</p>}</div>
        <div className="pt-10">
          <div className="flex items-center justify-center mb-2">
            <Image src="https://i.imgur.com/xgFciET.png" width={100} height={100} className="w-[25%]" alt="logo" />
          </div>
          <div className="bg-white mx-auto rounded-xl max-w-[400px] p-7">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <label htmlFor="User ID" className="text-[#5c5c5c] text-[16px]">User ID</label>
                  <input
                    type="text"
                    value={username}
                    className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent pb-5 border border-gray-300 outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="password" className="text-[#5c5c5c] text-[16px]">Password</label>
                  <input
                    type="password"
                    value={password}
                    className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent pb-5 border border-gray-300 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <button
                  type="submit"
                  className="p-4 bg-[#72569C] font-bold w-full rounded-[10px] text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center gap-3 my-6">
              <hr className="w-full border" />
              <span className="text-[#707070fa] text-[16px]">Or</span>
              <hr className="w-full border" />
            </div>
            <div className="flex flex-col gap-2 mt-6">
                <button
                  type="submit"
                  className="p-4 bg-[#ffffff] flex items-center justify-center gap-4 rounded-[10px] border border-[#72569C] font-bold w-full text-[#72569C]"
                >
                  <Image src="https://i.imgur.com/rpJiXHP.png" width={100} height={100} className="w-8 h-8" alt="sign in" />
                  Sign in with a QR code
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
