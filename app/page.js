import React from "react";
import Link from "next/link";

export default function HomePage() {

   let linkStyles = " hover:text-green-400 hover:underline p-5"
  return (
    <main>
      <h1 className="p-5 text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="text-lg">
        <li><Link href="./week-2/" className={linkStyles}>Week 2 Assignment</Link></li>
        <li><Link href="./week-3/" className={linkStyles}>Week 3 Assignment</Link></li>
      </ul>
    </main>
  );
}

