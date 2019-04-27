import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const white = 'hsl(0, 100%, 95%)';
  const nameField = 'name';

  return(
    <div>
      <label className="label" htmlFor={nameField}>
        Enter name:
      </label>
      <input id={nameField} type="text" />
      <button style={{ backgroundColor: 'blue', color: white }}>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
