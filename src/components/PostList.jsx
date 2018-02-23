import React from 'react';
import Post from './Post';
import Upvote from './Upvote';
import Downvote from './Downvote';
import PropTypes from 'prop-types';

function PostList(props){
  // console.log(props);
  return (
    <div>
      {Object.keys(props.postList).map(function(postId) {
        var post  = props.postList[postId];
        return <div>
          <Post
            author={post.author}
            content={post.content}
            tags={post.tags}
            timeStamp={post.timeStamp}
            likes={post.likes}
            key={post.id}
            postId={post.id} />
          <div className='row'>
            <div className='col-sm-12'>
              <Upvote post={post}/>
              <br />
              <Downvote post={post}/>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object
};


export default PostList;
