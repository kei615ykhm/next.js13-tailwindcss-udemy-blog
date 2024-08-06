import Link from "next/link";
import React from "react";

export const PageHeader: React.FC = () => {
  return (
    <header>
      <div>
        <h1 className="text-2x1 font-extrabold">
          <Link href="/">Next.js13 Blog</Link>
        </h1>
      </div>
    </header>
  );
};
