import React from "react";

function Comment({ cmt }) {
  return (
    <div className="border-b last:border-none px-4 py-3">
      {/* Username */}
      <p className="text-sm font-medium text-gray-700">@{cmt?.owner?.userName}</p>

      {/* Comment text */}
      <p className="text-gray-600 text-sm mt-1">{cmt?.content}</p>
    </div>
  );
}

export default Comment;
