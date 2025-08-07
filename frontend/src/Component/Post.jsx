import React from 'react';

function Post(post) {
  return (
    <>
        <div className=' bg-white mb-1 rounded-xl p-2'>
          <p><span>@</span> <u>username</u> </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat hic, deleniti ex et beatae esse veniam. Aspernatur laudantium eaque ad incidunt omnis saepe dolorem perspiciatis explicabo officiis pariatur. Perferendis, minima.</p>

          <div className='flex gap-4 mt-3'>
            <p> like : 56</p>
            <p>comments : 34</p>
          </div>
        </div>
    </>
  );
}

export default Post;
