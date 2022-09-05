import React from 'react'

const Message = () => {
  return (
    <>
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>12:30 pm</span>
      </div>
      <div className="messageContent">
        <p>Today is raining</p>
        <img src="https://images.pexels.com/photos/3481139/pexels-photo-3481139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>

    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>12:35 pm</span>
      </div>
      <div className="messageContent">
        <p>Yes it's rain right here, how are you today?</p>
      </div>
    </div>

    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>It's great thanks, how about you?</p>
      </div>
    </div>
    </>
  )
}

export default Message