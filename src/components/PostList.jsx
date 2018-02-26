import React from 'react';
import Post from './Post';
import Upvote from './Upvote';
import Downvote from './Downvote';
import PropTypes from 'prop-types';

function PostList(props){
  const header =
    <div>
      <h5>Current Posts:</h5>
    </div>;

  if (props.postList.length != 0) {
    return (
      <div>
        { header }
        {props.postList.map(function(postId, i) {
          var post  = props.postList[i];
          // code must started in the same line as return statement or the code must be wrapped in brackets
          return (
              <div>
                  <Post
                      author={post.author}
                      content={post.content}
                      tags={post.tags}
                      timeStamp={post.timeStamp}
                      likes={post.likes}
                      key={post.id}
                      postId={post.id} />
                    <div className='row'>
                      <div className='col-sm-6'>
                        <Upvote post={post}/>
                      </div>
                      <div className='col-sm-6'>
                        <Downvote post={post}/>
                      </div>
                    </div>
                  </div>);
        })}
      </div>
    );
  } else {
    return (
      <div>
        { header }
        <p><em>There are currently no posts to display. Please fill out the form to the right to add a post.</em></p>
      </div>
    );
  }
}

PostList.propTypes = {
  postList: PropTypes.array
};


export default PostList;
