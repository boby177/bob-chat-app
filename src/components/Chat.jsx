import React from 'react'
import Cam from '../imgs/cam-recorder.png'
import Add from '../imgs/add-friend.png'
import Menu from '../imgs/menu.png'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const {data } = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={Menu} alt="" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat