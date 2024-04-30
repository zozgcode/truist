"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TransactionHistory from "./transactionData/TransactionHistory";
import Testing from "./allUsersTxtData/Testing";
import TestingTwo from "./allUsersTxtData/Testing2";
import MindyRobinson from "./allUsersTxtData/MindyRobinson";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const [hide, setHide] = useState(false);
  
  const toggle = () => {
    setHide(!hide)
  }

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <div className="relative">
      {!user && (
        <div className="h-screen flex flex-col top-0 bg-white left-0 right-0 items-center fixed z-50 justify-center w-full text-2xl">
          <div className="loader"></div>
        </div>
      )}
      {user && (
        <div className="w-full">
          <div className="p-5 pb-10 bg-[#2d1a47]">
            <header className="py-4 mb-6 text-white flex items-center justify-center w-full p-5">
              <div className="flex items-end justify-end w-[55%]">
                <h2 className="sm:text-[24px] text-[19px]">Home</h2>
              </div>
              <div className="flex items-end justify-end w-[45%] relative">
                <FaRegCircleUser className="text-[32px]" onClick={toggle} />
                {hide && (
                  <div className="bg-white absolute top-[33px]">
                    <button
                      className="p-2 border border-white outline-none px-5 text-[13px] sm:text-[15px] text-[#2d1a47]"
                      onClick={handleLogout}
                    >
                      SIGN OUT
                    </button>
                  </div>
                )}
              </div>
              {/* <Image src="" width={50} height={50} alt="avatar" /> */}
            </header>
            <div className="flex justify-between">
              <p className="flex flex-col gap-1 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-[20px]">Hello,</span>
                  {user.profileImg && (
                    <Image
                      src={user.profileImg}
                      className="w-[45px] h-[45px] rounded-full"
                      width={150}
                      height={150}
                      alt="user_avatar"
                    />
                  )}
                </div>
                <span className="text-xl sm:text-2xl font-semibold">
                  {user.name}
                </span>
              </p>
              {/* <p className="text-[13px] sm:text-[15px] flex flex-col gap-1 text-white">
              <span>ACCOUNT BALANCE</span>
              <span className="text-xl sm:text-2xl font-semibold">${user.amount}</span>
            </p> */}
            </div>
            {/* <div className="flex flex-col my-5 gap-4 mt-8 items-center justify-center">
            <Image src="https://i.imgur.com/40chrc5.png" className="w-[125px] sm:w-[150px] h-[125px] sm:h-[150px] rounded-full" width={150} height={150} alt="user_avatar" />
            <span className="text-xl sm:text-2xl font-semibold text-white">{user.name}</span>
          </div> */}
          </div>
          <div className="border p-5 px-2">
            {/* checking acct */}
            <div className="w-full bg-white rounded-lg h-full p-5">
              <div className="flex justify-between">
                <span className="block text-black sm:text-[24px] text-[19px] font-semibold mb-1">
                  Checking Account
                </span>
                <span className="block text-black font-semibold sm:text-[24px] text-[19px] mb-1">
                  {user.checkingAccountNo}
                </span>
              </div>
              <p className="flex justify-between mt-4 sm:text-[26px] text-[20px] items-center font-bold text-gray-800">
                <span className="font-normal sm:text-[24px] text-[19px]">
                  Available Balance
                </span>
                <span>${user.checkingAmount}</span>
              </p>
            </div>

            {/* saving acct */}
            {user?.savingAccount && (
              <div className="w-full mt-4 bg-white rounded-lg h-full p-5">
                <div className="flex justify-between">
                  <span className="block text-black font-semibold mb-1">
                    Saving Account
                  </span>
                  <span className="block text-black font-semibold mb-1">
                    ...7335
                  </span>
                </div>
                <p className="flex justify-between items-center font-bold text-gray-800">
                  <span className="font-semibold">Balance</span>
                  <span>$80,000.65</span>
                </p>
              </div>
            )}
          </div>
          {/* <TransactionHistory /> */}
          <div className="p-5 px-2">
            <div className="bg-white flex items-center justify-between rounded p-3 py-2 sm:text-[24px] text-[19px] w-full">
              <span>Transactions</span>
              {/* <Link className="text-sky-500 underline" href="/accounts/transactions">
          See all
        </Link> */}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {user.id === 1 && <MindyRobinson />}
              {user.id === 2 && <TestingTwo />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
