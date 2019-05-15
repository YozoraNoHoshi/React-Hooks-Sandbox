import React, { PureComponent } from 'react';

interface Props {
  counter: number;
}
interface State {
  counter: number;
}

export default class Counter extends PureComponent<Props, State> {
  static defaultProps: Props = { counter: 0 };
  constructor(props: Props) {
    super(props);
    this.state = { counter: props.counter };
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
