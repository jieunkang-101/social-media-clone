import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
  return (
    <React.Fragment>
      <img src={props.img} />
      <a href={props.friendUrl}>{props.name}</a>
      <h3>{props.names}</h3>
      <hr/>
    </React.Fragment>
  );
}

Friend.propTypes = {
  img: PropTypes.string,
  friendUrl: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired
};

export default Friend;