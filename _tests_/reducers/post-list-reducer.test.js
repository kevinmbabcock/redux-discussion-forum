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

  test('Should successfully add new post to masterPostList', () => {
    const { author, content, tags, id, likes, timeStamp } = samplePost;
    action = {
      type: c.ADD_POST,
      author: author,
      content: content,
      tags: tags,
      id: id,
      likes: likes,
      timeStamp: timeStamp
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        author: author,
        content: content,
        tags: tags,
        id: id,
        likes: likes,
        timeStamp: timeStamp
      }
    });
  });

  test('Should increase likes property on like', () => {
    const { author, content, tags, id, likes, timeStamp } = samplePost;
    action = {
      type: c.UPVOTE_POST,
      author: author,
      content: content,
      tags: tags,
      id: id,
      likes: likes,
      timeStamp: timeStamp
    };
    expect(postListReducer({ [id] : samplePost }, action)).toEqual({
      [id] : {
        author: 'Steve',
        content: 'This is Steve\'s post',
        tags: 'steve',
        id: 0,
        likes: 1,
        timeStamp: 'Thu Feb 22 2018 14:29:45 GMT-0800 (PST)'
      }
    });
  });

  test('Should decrease likes property on dislike', () => {
    const { author, content, tags, id, likes, timeStamp } = samplePost;
    action = {
      type: c.DOWNVOTE_POST,
      author: author,
      content: content,
      tags: tags,
      id: id,
      likes: likes,
      timeStamp: timeStamp
    };
    expect(postListReducer({ [id] : samplePost }, action)).toEqual({
      [id] : {
        author: 'Steve',
        content: 'This is Steve\'s post',
        tags: 'steve',
        id: 0,
        likes: -1,
        timeStamp: 'Thu Feb 22 2018 14:29:45 GMT-0800 (PST)'
      }
    });
  });

})
