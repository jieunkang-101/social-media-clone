import React from "react";
import Sunflower from "../assets/img/sunflower.jpg";

const masterFriendList = [
  {
    img: '${Sunflower}',
    names: 'Jenny'
  }, 
  {
    img: '${Sunflower}',
    names: 'Steve'
  },
  {
    img: '${Sunflower}',
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
          name={friend.names}
          key={id} />
      )}
    </React.Fragment>
  )
}

export default FriendList;