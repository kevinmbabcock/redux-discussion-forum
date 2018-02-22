import React from 'react';
import Post from './Post';
import Upvote from './Upvote';
import Downvote from './Downvote';
import PropTypes from 'prop-types';

function PostList(props){
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
            key={postId}
            postId={postId} />
          <div>
            <Upvote postId={postId}/>
            <Downvote postId={postId}/>
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
