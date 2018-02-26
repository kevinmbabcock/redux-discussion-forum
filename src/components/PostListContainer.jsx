import React from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PostListContainer(props){

  return (
    <div>
      <PostList postList={props.masterPostList} />
    </div>
  );
}

PostListContainer.propTypes = {
  masterPostList: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  if (Object.keys(state).length != 0) {
    let newState = Object.values(state);
    let returnedList = newState.sort(function(a,b) {return b.likes - a.likes ;})
    return {
      masterPostList: returnedList
    };
  } else {
    return {
      masterPostList: []
    };
  }
};

export default connect(mapStateToProps)(PostListContainer);
