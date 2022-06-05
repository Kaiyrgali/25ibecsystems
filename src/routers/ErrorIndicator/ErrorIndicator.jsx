import React from 'react';

function ErrorIndicator({error}) {
  return (
    <div>
      <img src="./error.jpg" alt="Page not Found" className="Error" />
    </div>
  );
}

export default ErrorIndicator;
