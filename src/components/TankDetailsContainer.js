import React, { Component } from 'react';
import { getTank } from '../actions';
import { connect } from 'react-redux';
import TankDetails from './TankDetails';

class TankDetailsContainer extends Component {

  componentDidMount() {
    this.props.getTank(Number(this.props.match.params.id))
  }

  render() {
    return (
      <TankDetails
      tank={this.props.tank}
      />
    )
  }
}

const mapStateToProps = state => ({
  tank: state.tank
})

export default connect(mapStateToProps, {getTank})(TankDetailsContainer)
