import React, { Component } from "react";
import { getTanks } from "../actions";
import { connect } from "react-redux";
import TankList from "./TankList";

class TankListContainer extends Component {
  componentDidMount() {
    this.props.getTanks();
  }

  render() {
    return <TankList tanks={this.props.tanks} />;
  }
}

const mapStateToProps = state => ({
  tanks: state.tanks
});

export default connect(mapStateToProps, { getTanks })(TankListContainer);
