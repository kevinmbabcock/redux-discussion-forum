import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function Upvote(props) {

  function handleUpvoteButtonClick(postId) {
    const { dispatch } = props;
    const action = {
      type: c.UPVOTE_POST,
      postId: postId
    };
    dispatch(action);
  }

  return (
    <div onClick={() => {handleUpvoteButtonClick(props.postId);}}>
      <button className='btn btn-primary'>Upvote</button>
    </div>
  );
}

Upvote.propTypes = {
  postId: PropTypes.string.isRequired
};

export default connect()(Upvote);
