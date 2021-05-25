import { useEffect, useState } from 'react';
import PostListItem from '../PostListItem/PostListItem';
import './PostList.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/PostReducer';

const PostList = () => {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const posts = useSelector((state) => state.post.post);

  let filteredPosts =
    posts && posts.filter((val) => {
      if (val.title.toLowerCase().indexOf(search.toLowerCase()) > -1) {
        return val
      }
      return null;
    })

  return (
    <div className="PostList">
      <div className="PostList-sidebar">
        <img src='https://res.cloudinary.com/suaz/image/upload/v1621452710/11800flowers-logo_hscckj.jpg' alt='logo'></img>
        <h1 className='PostList-title'>
          <span>Coding</span> Challenge
        </h1>
        <h2>By: Steven Suazo</h2>
      </div>
      <div className="PostList-mainbar">
        <input
          className='PostList-search'
          type='text'
          placeholder='Search...'
          onChange={e => { setSearch(e.target.value) }}
        />
        <div className='PostList-posts'>
          {posts && filteredPosts.map((post, idx) => (
            <PostListItem
              key={idx}
              id={post.id}
              title={post.title}
              body={post.body}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;