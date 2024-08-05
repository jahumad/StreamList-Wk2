import React, { useState } from 'react';

const Watch = () => {
  const [event, setEvent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event submitted:', event);

    setEvent('');
  };

  return (
    <div>
      <h1>My Watch List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Enter a title"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Watch;