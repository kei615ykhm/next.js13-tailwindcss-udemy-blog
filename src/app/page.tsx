import Image from "next/image";
import ArticleList from "./components/ArticleList";
import { getAllArticles } from "@/blogAPI";

export default async function Home() {
  // TODO: エラーハンドリングを追加する
  // 1. getAllArticles()関数を呼び出して全記事データを取得
  // この関数はblogAPI.tsで定義されていて、おそらくデータベースやAPIから記事を取得する
  const articles = await getAllArticles();

  // 2. 取得した記事データをArticleListコンポーネントに渡して表示
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        {/* 3. ArticleListコンポーネントにarticlesを渡す */}
        {/* ArticleListコンポーネントは渡された記事データを使って記事一覧を表示する */}
        <ArticleList articles={articles} />
      </section>

      {/* サイドバーエリア */}
      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        {/* カテゴリーセクション */}
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Category</h3>
          <ul className="text-gray-600 mt-2">
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
