import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: '',
    age: 0,
    height: '',
    id: 0,
  });

  const submitHandler = (e) => {
    props.postSmurfs(smurf);
    document.getElementById('smurfForm').reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div className='form'>
      <form id='smurfForm'>
        <input
          type='text'
          name='name'
          label='name'
          placeholder='Smurf Name'
          value={props.name}
          onChange={inputHandler}
          className='input'
        />
        <input
          type='text'
          name='age'
          label='age'
          placeholder='Smurf Age'
          value={props.age}
          onChange={inputHandler}
          className='input'
        />
        <input
          type='text'
          name='height'
          label='height'
          placeholder='Smurf Height'
          value={props.height}
          onChange={inputHandler}
          className='input'
        />
        {/* <input
          type='text'
          name='id'
          label='id'
          placeholder='Smurf Id'
          value={props.id}
          onChange={inputHandler}
          className='input'
        /> */}
        <button className='btn' onClick={submitHandler}>
          Add Smurf
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
