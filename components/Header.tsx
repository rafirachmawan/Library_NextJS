"use client";

import Link from "@/node_modules/next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justfiy-between gap-5">
      <Link href="/">BookWise</Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link href="/library" className="text-base cursor-pointer capitalize">
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
