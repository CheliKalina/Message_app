// import React from 'react';

// class Alert extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             alert: true
//         }
//     }

//     componentDidMount() {
//         alert("I'm alive");
//       }

// }

// export default Alert;


import React from "react";
import Checkbox from "./checkbox";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
    // this.state = { checked: false };
  }
  componentDidMount() {
    alert("I'm alive");
  }
  render() {
    return (
      <div>
        {/* <Checkbox
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
        /> */}
        <p> the checkbox is checked</p>
      </div>
    );
  }
}
export default Alert;