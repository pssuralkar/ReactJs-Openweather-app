import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const Tabs = {
  float: 'left',
  marginRight: '15px',
};

class TabTitle extends Component {
  constructor(props) {
    super(props);
    this.onDel = this.onDel.bind(this);
  }

  onDel() {
    this.props.onDel(this.props.elName);
  }

  render() {
    return (
      <div>
        <p style={Tabs} >{this.props.elName}</p>
        <Button bsSize="xsmall"></Button>
      </div>
    );
  }
}

TabTitle.propTypes = {
  onDel: PropTypes.func.isRequired,
  elName: PropTypes.string.isRequired,
};

export default TabTitle;
