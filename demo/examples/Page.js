import React from 'react';

import {Page, Button} from '../../src/index.js';

import MyToolbar from './MyToolbar';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifier: 'material'
    };
  }

  toggleModifier() {
    this.setState({
      modifier: this.state.modifier === 'material' ? '' : 'material'
    });
  }

  render() {
    return (
      <Page
        renderToolbar={() => <MyToolbar title='Page' />}
        modifier={this.state.modifier} >
        <p>
          This is a page!
        </p>
        <p>
          <Button modifier={this.state.modifier} onClick={this.toggleModifier.bind(this)}>Switch modifier</Button>
        </p>
      </Page>
    );
  }
}
