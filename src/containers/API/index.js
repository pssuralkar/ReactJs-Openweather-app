import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import View from '../../components/View';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cityName: this.props.cityName,
      data: '',
      ID: 'f856f022efa1df9a0c367c7ccff0df1f',
    };
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&APPID=${this.state.ID}`)
      .then((response) => {
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (this.state.loading ?
      <Col lg={6} md={6} sm={12} xs={12}>
        <h5>Loading...</h5>
      </Col> :
        <View data={this.state.data} onDel={this.props.onDel} />
    );
  }
}

API.propTypes = {
  cityName: PropTypes.string.isRequired,
  onDel: PropTypes.func.isRequired,
};

export default API;
