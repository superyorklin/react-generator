import React from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

import {
  Menu
} from '../containers';

@inject('frameStore')
@observer
class Frame extends React.Component {

  render() {
    return (
      <div id="Frame">
        <Menu />
        <div className="container">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Frame.propTypes = {
  children: propTypes.Any
}


export default withRouter(Frame);