import React from 'react';
import {connect} from 'react-redux'
import {deleteSmurfs} from '../actions'

const SmurfCard = (props) => {

  const deleteHandler = e => {
    e.preventDefault()
    props.deleteSmurfs()
  }
  return (
    <div className='card'>
      <h3>{props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button className='btn' onClick={deleteHandler}>Delete Smurf</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps, {deleteSmurfs})(SmurfCard);
