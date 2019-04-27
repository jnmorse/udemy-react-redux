import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

function App() {
  return (
    <div className="ui large containter comments">
      <ApprovalCard>
        <CommentDetail {...faker.helpers.contextualCard()} date={faker.date.recent()}>
          <p>{faker.lorem.sentence()}</p>
        </CommentDetail>
      </ApprovalCard>

      <CommentDetail {...faker.helpers.contextualCard()} date={faker.date.recent()}>
        <p>{faker.lorem.paragraph()}</p>
      </CommentDetail>
      <CommentDetail {...faker.helpers.contextualCard()} date={faker.date.recent()}>
        <p>{faker.lorem.paragraph()}</p>
      </CommentDetail>
      <CommentDetail {...faker.helpers.contextualCard()} date={faker.date.recent()}>
        <p>{faker.lorem.paragraph()}</p>
      </CommentDetail>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
