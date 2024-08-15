import { Article } from "./types";

// type.tsのArticle型を返す関数
export const getAllPosts = async (): Promise<Article[]> => {
  // fetchでAPIを叩いてhttpsにGETリクエストを送る
  const res = await fetch(`https://localhost:3001/posts`, {
    cache: "no-cache",
  }); // ここでSSRのAPIを叩いている

  // fetchの結果をjsonに変換して返す（データを文字列に変換して返す）
  const articles = await res.json();
  // ここで返ってきたデータは、APIのレスポンスのデータがそのまま返ってくる
  return articles;
};
