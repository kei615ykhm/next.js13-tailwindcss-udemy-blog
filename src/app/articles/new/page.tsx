import React from "react";

const CreateBlogPage = () => {
  // TODO: フォーム送信時の処理を実装する
  // TODO: 状態管理のためのuse stateを追加する
  // TODO: APIとの連携機能を実装する

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>

      {/* TODO: onsubmit属性を追加し、送信処理を実装する */}
      <form className="bg-slate-200 p-6 rounded shadow-lg">
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          {/* TODO: value属性とonChange属性を追加する */}
          <input
            type="text"
            className="shadow border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          {/* TODO: value属性とonChange属性を追加する */}
          <input
            type="text"
            className="shadow border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          {/* TODO: value属性とonChange属性を追加する */}
          <textarea className="shadow border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>

        {/* TODO: loading状態に応じたスタイル変更とdisabled属性の制御を実装する */}
        <button
          type="submit"
          className="py-2 px-4 border rounded-md bg-orange-300"
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
