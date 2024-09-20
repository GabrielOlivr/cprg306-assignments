import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>CPRG 306: Weeb Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2" target="_blank" rel="noopener noreferrer">
          Week 2 Assignment
        </Link>
      </p>
    </main>
  );
}

