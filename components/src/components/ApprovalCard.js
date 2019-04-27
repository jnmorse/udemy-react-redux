import React, { useState, useEffect } from 'react';

export default function ApprovalCard(props) {
  const [submit, wasSubited] = useState(false);
  const [reset, wasReset] = useState(false);

  useEffect(() => {
    console.log(reset, submit)
  });

  return (
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <button
            onClick={() => {
              wasSubited(true)
              wasReset(false)
            }}
            className="ui basic green button"
            type="submit"
          >
            Approve
          </button>
          <button
            onClick={() => {
              wasReset(true)
              wasSubited(false)
            }}
            className="ui basic red button"
            type="reset"
          >
            reject
          </button>
        </div>
      </div>
    </div>
  );
};
