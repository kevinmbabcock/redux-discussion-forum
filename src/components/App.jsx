import React from 'react';
import Header from './Header';
import PostListContainer from './PostListContainer';
import NewPostForm from './NewPostForm';

function App(){
  return (
    <div className="container">
      <Header />
      <div className='row'>
        <div className='col-md-6'>
          <PostListContainer />
        </div>
        <div className='col-md-6'>
          <NewPostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
