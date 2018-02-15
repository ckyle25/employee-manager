import React, { Component } from 'react';

class EmployeeEditor extends Component {
constructor() {
  super();
  this.state = {
    employee: null,
    originalEmployee: null,
    notModified: true
  }
}

componentWillReceiveProps (props) {
  this.setState({
    employee: Object.assign({},props.selected),
    originalEmployee: props.selected,
    notModified: true
  })
}

handleChange(prop,val) {
  this.setState({
    notModified: false
  })
}

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default EmployeeEditor;
