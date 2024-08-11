import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1000/500"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3x1 font-bold hover:text-gray-700"
          >
            Next.jsの勉強中
          </Link>
          <p>By kei615ykhm, 2024/08/10</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            placeat. Veritatis, debitis quidem. Fugiat alias assumenda sequi
            sunt enim iure ratione quia possimus perspiciatis tempore facere,
            harum rem eaque incidunt?
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
