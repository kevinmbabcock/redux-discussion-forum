import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <h5>{props.author}</h5>
      <p>{props.content}</p>
      <p><em>{props.tags}</em></p>
      <p><strong>{props.likes}</strong></p>
      <p>{props.timeStamp}</p>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string,
  likes: PropTypes.number,
  timeStamp: PropTypes.string.isRequired
};

export default Post;
