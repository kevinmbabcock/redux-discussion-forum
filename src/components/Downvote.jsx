import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function Downvote(props) {

  function handleDownvoteButtonClick(postId) {
    const { dispatch } = props;
    const action = {
      type: c.DOWNVOTE_POST,
      postId: postId
    };
    dispatch(action);
  }

  return (
    <div onClick={() => {handleDownvoteButtonClick(props.postId);}}>
      <button className='btn btn-primary'>Downvote</button>
    </div>
  );
}

Downvote.propTypes = {
  postId: PropTypes.string.isRequired
};

export default connect()(Downvote);
