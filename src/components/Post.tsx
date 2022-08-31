import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { postAdded, postEdited, PostState } from '../features/PostSlice';

export const Post = () => {

  const posts = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();

  const [id, setId] = useState('');
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const onHeaderChanged = (e: any) => setHeader(e.target.value)
  const onContentChanged = (e: any) => setContent(e.target.value)
  const onSave = () => {
    if (header && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          header,
          content
        })
      )

      setHeader('')
      setContent('')
    }
  }
  const onEdit = () => {
    if (header && content) {
      dispatch(
        postEdited({
          id: id,
          header,
          content
        })
      )
      setId('');
      setHeader('');
      setContent('');
      setIsEdit(false);
    }
  }
  const clickEdit = (post: PostState) => {
    setId(post.id);
    setHeader(post.header);
    setContent(post.content);
    setIsEdit(true);
  }


  return (
    <>
      <section>
        <h2>Add a New Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={header}
            onChange={onHeaderChanged}
          />
          <label htmlFor="postContent">Content:</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          {isEdit ? <button type="button" onClick={onEdit}>Edit Post</button> : <button type="button" onClick={onSave}>Save Post</button>}
        </form>
      </section>
      {posts.map((post: PostState) => {
        return (
          <div key={post.id}>
            <h3>
              {post.header}
            </h3>
            <span>
              {post.content}
            </span>
            <button type="button" onClick={() => clickEdit(post)}>Edit</button>
          </div>
        );
      })}
    </>
  )
};