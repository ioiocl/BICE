import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>

      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    spotPrices: state.spotPrices.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
