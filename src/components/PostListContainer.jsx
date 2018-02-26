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
  masterPostList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  if (Object.keys(state).length != 0) {
    console.log(state);
    let newState = Object.values(state);
    let newPostList = newState.sort(function(a,b) {return b.likes - a.likes ;})
    let returnedState = {};
    newPostList.forEach(function(post, i) {
      returnedState[post.id] = post
    })
    console.log(returnedState);
    return {
      masterPostList: returnedState
    };
  } else {
    return {
      masterPostList: state
    };
  }
};

export default connect(mapStateToProps)(PostListContainer);
