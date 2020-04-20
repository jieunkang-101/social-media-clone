import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div>
        <img src={props.img} />
        <p>{props.comment}</p>
        <p>{props.tag}</p>
        <p>{props.feeling}</p>
      </div>
    <hr/>
  </React.Fragment>
  )
}

Post.prototype = {
  img: PropTypes.string,
  comment: PropTypes.string,
  tag: PropTypes.string,
  feeling: PropTypes.string
}