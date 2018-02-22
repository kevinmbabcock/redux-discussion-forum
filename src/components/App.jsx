import React from 'react';
import Header from './Header';
import PostListContainer from './PostListContainer';
import NewPostForm from './NewPostForm';

function App(){
  return (
    <div className="container">
      <Header />
      <PostListContainer />
      <NewPostForm />
    </div>
  );
}

export default App;
