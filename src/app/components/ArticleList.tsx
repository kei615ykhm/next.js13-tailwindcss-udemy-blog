import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://picsum.photos/1000/500"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <a href="#">technology</a>
          <a href="#">Next.jsの勉強中</a>
          <p>By kei615ykhm, 2024/08/10</p>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
