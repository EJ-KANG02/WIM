import React, { useState } from 'react';
import { Banner } from './NewPost/Banner';
import { Post } from './NewPost/Post';
import { PostForm } from './NewPost/PostForm';
import { MenuBar } from './NewPost/MenuBar';
import Button from './components/Button';
import './Main.css';

const Newportfolio = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [isNewPost, setIsNewPost] = useState(false);
  const [editingPostIndex, setEditingPostIndex] = useState(null);

  const handleAdd = () => {
    setPosts([...posts, newPost]);
    setNewPost({ title: '', content: '' });
    setIsNewPost(false);
  };

  const handleUpdate = (index, updatedPost) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = updatedPost;
    setPosts(updatedPosts);
  };

  return (
    <div className="main-container">
      <Banner />
      <div className="Main">
       <div className='MenuBar'>
       <MenuBar/>
       </div>
        <div className="UserForm" style={ {flexDirection: 'column'} }>
          <Button type= 'button' text= '추가' onClick={() => setIsNewPost(true)} />

          {posts.map((post, index) => (
            <Post
              key={index}
              index={index}
              title={post.title}
              content={post.content}
              isEditing={editingPostIndex === index}
              handleUpdate={handleUpdate}
              setEditingPostIndex={setEditingPostIndex}
            />
          ))}

          {isNewPost && (
            <PostForm 
              newPost={newPost} 
              setNewPost={setNewPost} 
              handleAdd={handleAdd} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Newportfolio;
