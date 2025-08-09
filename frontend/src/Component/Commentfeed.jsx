import Comment from "./Comment";

function Commentfeed({ comment, postId, refreshPostDetail }) {

  return (
    <div className="border w-full md:w-1/2 bg-white">
      {comment?.map((cmt, index) => (
        <Comment 
          key={index} 
          cmt={cmt}
          postId={postId}
          refreshPostDetail={refreshPostDetail}
        />
      ))}
    </div>
  );
}

export default Commentfeed;
