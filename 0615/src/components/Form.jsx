import React, { useRef } from 'react';

const Form = () => {
  const writer = useRef();
  return (
    <div style={{ width: '1200px', margin: 'auto', fontSize: '2rem' }}>
      <div>
        <input type='text' name='writer' id='writer' placeholder='작성자' ref={writer} />
        <label htmlFor='writer' className='blind'></label>
      </div>
      <div>
        <textarea name='contents' placeholder='오늘 수행한 일' />
      </div>
      <div>
        <select name='grade'>
          <option value=''>50</option>
          <option value=''>60</option>
          <option value=''>70</option>
          <option value=''>80</option>
          <option value=''>90</option>
          <option value=''>100</option>
        </select>
      </div>
      <div>
        <button>저장하기</button>
      </div>
    </div>
  );
};

export default Form;
