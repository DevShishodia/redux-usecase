import React, { Component } from 'react'
import {connect} from "react-redux";

class Display extends Component {
  render() {
    console.log(this.props?.storeData?.reducer?.name);
    return (
      <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='card-header bg-success text-white'>
                <h1>Display Component</h1>
              </div>
              <div className='card-body'>
                <h1>
                   {this.props?.storeData?.reducer?.name}
                </h1>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default connect((reduxStore)=>{
  console.log(reduxStore);
  return {
    storeData:reduxStore
  }
},null)(Display);
