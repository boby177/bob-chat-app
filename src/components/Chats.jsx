import React from "react";

const Chats = () => {

  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>Pazani</span>
          <p>
            Hello is this Mrs. Jane? My name is Pazani, i really interested
            about your products, can i ask you a few
            question?
          </p>
          <p style={{ color: "wheat" }}>12:10 pm</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span>Tina</span>
          <p>Hi Jane</p>
          <p style={{ color: "wheat" }}>10:30 am</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span>Amber</span>
          <p>Good Morning, have a nice day</p>
          <p style={{ color: "wheat" }}>07:48 am</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
