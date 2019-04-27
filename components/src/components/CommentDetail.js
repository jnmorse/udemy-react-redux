import React from 'react';

export default function CommentDetail(props) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img width={128} height={128} alt="avatar" src={props.avatar}/>
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.username}
        </a>

        <div className="metadata">
          <span className="date">{props.date.toLocaleString()}</span>
        </div>

        <div className="text">
          {props.children}
        </div>
      </div>
    </div>
  );
};
