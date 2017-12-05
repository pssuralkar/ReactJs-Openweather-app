import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

class View extends Component {

  shouldComponentUpdate(newProps) {
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    console.log(this.props.data)
    return (
      <Col lg={6} md={6} sm={12} xs={12}>
        <h3>{this.props.data.name}
        </h3>
        <p>Current temp.: <strong>{Math.floor(this.props.data.main.temp - 273)}°C </strong></p>
        <p>Sunrise: <strong>{this.props.data.sys.sunrise}</strong></p>
        <p>Sunset: <strong>{this.props.data.sys.sunset}</strong></p>

        <p>Wind: <strong>{this.props.data.wind.speed}</strong></p>
        <p>Sea level: <strong>{this.props.data.main.sea_level}</strong></p>
        
      </Col>
    );
  }
}

View.propTypes = {
  data: PropTypes.object.isRequired,
};

export default View;
