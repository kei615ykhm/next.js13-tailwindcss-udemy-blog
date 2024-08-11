import React from "react";

const CreateBlogPage = () => {
  return (
    <div>
      <h2>ブログ新規作成</h2>

      <form>
        <div className="mb-4">
          <label>URL</label>
          <input
            type="text"
            className="shadow border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label>URL</label>
          <input
            type="text"
            className="shadow border round w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
