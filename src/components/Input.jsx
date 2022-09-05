import React from 'react'
import Image from '../imgs/add-image-chat.png'
import Attachment from '../imgs/attachment.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text"  placeholder='Message...' />
      <div className="send">
      <input type="file" style={{display:"none"}} id='file' />
        <label htmlFor="file">
        <img src={Attachment} alt="" />
        </label>
        
        <input type="file" style={{display:"none"}} id='image' />
        <label htmlFor="image">
          <img src={Image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input