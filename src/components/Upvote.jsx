import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function Upvote(props) {

  function handleUpvoteButtonClick(post) {
    const { dispatch } = props;
    const action = {
      type: c.UPVOTE_POST,
      author: post.author,
      content: post.content,
      tags: post.tags,
      id: post.id,
      likes: post.likes,
      timeStamp: post.timeStamp
    };
    dispatch(action);
  }

  return (
    <div onClick={() => {handleUpvoteButtonClick(props.post);}}>
      <button className='btn btn-primary'>Upvote</button>
    </div>
  );
}

Upvote.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect()(Upvote);
