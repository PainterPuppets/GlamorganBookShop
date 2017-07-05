import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';

@observer
class App extends Component {
  render() {
    return (
        <Button onClick={this.onReset}>
            Seconds passed: {this.props.appState.timer}
        </Button>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;