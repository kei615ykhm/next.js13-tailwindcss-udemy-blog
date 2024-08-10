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
          <a href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            placeat. Veritatis, debitis quidem. Fugiat alias assumenda sequi
            sunt enim iure ratione quia possimus perspiciatis tempore facere,
            harum rem eaque incidunt?
          </a>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
