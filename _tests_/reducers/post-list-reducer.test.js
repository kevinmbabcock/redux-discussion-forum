import postListReducer from './../../src/reducers/post-list-reducer';
import c from './../../src/constants';

describe('postListReducer', () => {

  let action;
  const samplePost = {
    author: 'Steve',
    content: 'This is Steve\'s post',
    tags: 'steve',
    id: 0,
    likes: 0,
    timeStamp: 'Thu Feb 22 2018 14:29:45 GMT-0800 (PST)'
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
})
