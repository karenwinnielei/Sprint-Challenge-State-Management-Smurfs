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
      <h2>{props.smurf.name}</h2>
      <h2>{props.smurf.age}</h2>
      <h2>{props.smurf.height}</h2>
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
