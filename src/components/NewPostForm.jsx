import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import c from './../constants';

function NewPostForm(props){
  let _author;
  let _content;
  let _tags;

  function handleNewPostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_POST,
      author: _author.value,
      content: _content.value,
      tags: _tags.value,
      id: v4(),
      likes: 0,
      timeStamp: (new Date()).toString()
    };
    dispatch(action);
    _author.value = '';
    _content.value = '';
    _tags.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='author'
          placeholder='Your Name'
          ref={(input) => {_author = input;}}/>
        <textarea
          id='content'
          placeholder='Post content'
          ref={(textarea) => {_content = textarea;}}/>
        <input
          type='text'
          id='tags'
          placeholder='Add tags; separate with comma'
          ref={(input) => {_tags = input;}}/>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}


export default connect()(NewPostForm);
