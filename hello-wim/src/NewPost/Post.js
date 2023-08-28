import { useState } from 'react';
import Button from '../components/Button';
export const Post = ({ title, content, isEditing, handleUpdate, index, setEditingPostIndex }) => {
  const [editedPost, setEditedPost] = useState({ title, content });

  const handleChange = (e, field) => {
    setEditedPost({ ...editedPost, [field]: e.target.value });
  };

  const finishEditing = () => {
    handleUpdate(index, editedPost);
    setEditingPostIndex(null);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedPost.title}
            onChange={(e) => handleChange(e, 'title')}
            placeholder="제목"
          />
          <textarea
            value={editedPost.content}
            onChange={(e) => handleChange(e, 'content')}
            placeholder="내용"
          ></textarea>
          <Button type= 'button' text= '완료' onClick={finishEditing} />
        </>
      ) : (
        <>
          <h3 className='PostTitle'>{title}</h3>
          <hr />
          <p className='PostContent'>{content}</p>
          <Button type= 'button' text= '수정' onClick={() => setEditingPostIndex(index)} />
        </>
      )}
    </div>
  );
};