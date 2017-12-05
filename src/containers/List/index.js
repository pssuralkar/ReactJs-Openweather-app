import React, { Component } from 'react';
import { Row, Tabs, Tab, } from 'react-bootstrap';
import localStorage from 'localStorage';
import API from '../../containers/API';
import TabTitle from '../../components/TabTitle';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCity: '',
      cities: this.props.cities,
      activeKey: this.props.activeKey,
      validationState: '',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    localStorage.setItem('key', key);
    this.setState({
      activeKey: key,
    });
  }

  render() {
    return (
      <div>
      <Row>
        <Tabs activeKey={+this.state.activeKey} onSelect={this.handleSelect} id="tab">
          {
            this.state.cities.map((el, key) =>
              <Tab
                eventKey={key}
                key={key}
                title={<TabTitle elName={el} />}
              >
                <API cityName={el} key={el} />
              </Tab>
            )
          }
        </Tabs>
      </Row>
      </div>
    );
  }
}

List.propTypes = {
  cities: React.PropTypes.array.isRequired,
  activeKey: React.PropTypes.string.isRequired,
};

export default List;
