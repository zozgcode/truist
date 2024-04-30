import React from "react";
import { fMenuLink } from "./data";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  
  return (
    <div className="fixed p-4 sm:px-8 py-4 bottom-0 w-full bg-[#2d1a47] left-0 right-0">
      <div className="flex justify-between gap-4 w-full">
        {fMenuLink.map((link, i) => (
          <Link href={link.slug} key={i} className="flex flex-col text-white w-full items-center justify-center">
            <span><FontAwesomeIcon icon="fa-solid fa-ellipsis" /></span>
            <span className="text-[17px]">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
