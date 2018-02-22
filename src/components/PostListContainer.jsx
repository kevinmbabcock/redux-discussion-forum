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
  return {
    masterPostList: state
  };
};

export default connect(mapStateToProps)(PostListContainer);
