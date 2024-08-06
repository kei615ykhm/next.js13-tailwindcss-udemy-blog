import Link from "next/link";
import React from "react";

export const PageHeader: React.FC = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between item-cen">
      <div></div>
      <div>
        <nav>
          <Link href="/articles/new">記事を書く</Link>
        </nav>
      </div>
    </header>
  );
};
