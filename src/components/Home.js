import React, { Component } from 'react';
import testApi from '../api';

export default class Home extends Component {
  render() {

    testApi.fetchData(function(err, data) {
      console.log(data);
    });

    return (
      <div>
        
      </div>
    )
  }
}
