import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Bob Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Jane</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar