export const PostForm = ({ newPost, setNewPost, handleAdd }) => (
    <div>
      <input
        type="text"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        placeholder="제목"
      />
      <hr />
      <textarea
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        placeholder="내용"
      ></textarea>
      <button onClick={handleAdd} disabled={!newPost.title || !newPost.content}>
        제출
      </button>
    </div>
  );