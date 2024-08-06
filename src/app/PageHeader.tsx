import Link from "next/link";
import React from "react";

export const PageHeader: React.FC = () => {
  return (
    <header>
      <div>
        <Link href="/">Next.js13 Blog</Link>
      </div>
    </header>
  );
};
