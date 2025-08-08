import Comment from "./Comment";

function Commentfeed({ comment }) {
  console.log(comment);

  return (
    <div className="border w-full md:w-1/2 bg-white">
      {comment?.map((cmt, index) => (
        <Comment 
          key={index} 
          cmt={cmt}
        />
      ))}
    </div>
  );
}

export default Commentfeed;
