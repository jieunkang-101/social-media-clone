import React from "react";
import Sunflower from "../assets/img/sunflower.jpg";
import Friend from "./Friend";

const masterFriendList = [
  {
    img: '../assets/img/sunflower.jpg',
    names: 'Jenny'
  }, 
  {
    img: '../assets/img/sunflower.jpg',
    names: 'Steve'
  },
  {
    img: '../assets/img/sunflower.jpg',
    names: 'Ann'
  }

];

function FriendList() {
  return (
    <React.Fragment>
      <hr/>
      {masterFriendList.map((friend, id) =>
        <Friend 
          img={Sunflower}
          names={friend.names}
          key={id} />
      )}
    </React.Fragment>
  )
}

export default FriendList;