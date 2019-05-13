import React, { PureComponent } from 'react';

interface Props {}
interface State {
  counter: number;
}

export default class Counter extends PureComponent<Props, State> {
  static defaultProps: Props = {};
  constructor(props: Props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = (evt: any) => {
    this.setState((prevSt: State) => {
      return {
        counter: prevSt.counter + 1
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        {this.state.counter}

        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}
