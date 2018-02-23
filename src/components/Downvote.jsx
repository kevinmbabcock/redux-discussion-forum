import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function Downvote(props) {

  function handleDownvoteButtonClick(post) {
    const { dispatch } = props;
    const action = {
      type: c.DOWNVOTE_POST,
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
    <div onClick={() => {handleDownvoteButtonClick(props.post);}}>
      <button className='btn btn-primary'>Downvote</button>
    </div>
  );
}

Downvote.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect()(Downvote);
