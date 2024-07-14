import React from 'react'
import './PostForm.css'

const PostForm = () => {
  return (
    <div className='postFormContainer'>
        <form action="">
            <header>POST PRODUCT</header>
            <input type="text " placeholder='business name' />
            <textarea name="" id=""  placeholder='description'></textarea>
            <input type="file" name="" id="" />
            <button>POST</button>
        </form>
    </div>
  )
}

export default PostForm