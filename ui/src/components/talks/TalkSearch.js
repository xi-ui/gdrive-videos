import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { searchTalks } from "../../actions";

const TalkSearch =  (props) => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect( () => {
    const timeoutId = setTimeout( () => {
      setDebouncedTerm(term);
    }, 1000);

    return (() => {
      clearTimeout(timeoutId);
    });
  }, [term]);

  useEffect( () => {
    props.searchTalks(debouncedTerm)
  }, [debouncedTerm]);

  return (
    <div>
      <div className={'ui form'} >
        <div className={'field'}>
          <label>Enter Serach:</label>
          <input
            className={'input'}
            type={'text'}
            value={term}
            onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default connect(null, { searchTalks })(TalkSearch);
