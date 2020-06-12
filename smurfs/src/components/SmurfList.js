/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

const SmurfList = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <h2>Smurf List</h2>
      <div className='cardContainer'>
        {props.smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);
