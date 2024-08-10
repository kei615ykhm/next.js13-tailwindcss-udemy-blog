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
      </article>
    </div>
  );
};

export default ArticleList;
