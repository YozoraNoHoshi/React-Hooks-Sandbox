import React, { PureComponent } from 'react';
import axios from 'axios';

interface Props {
  number: number;
}
interface State {
  fact: string;
}

export default class NumberFact extends PureComponent<Props, State> {
  static defaultProps: Props = { number: 0 };
  constructor(props: Props) {
    super(props);
    this.state = { fact: '' };
  }

  async componentDidMount() {
    const request = await axios.get(
      `http://numbersapi.com/${this.props.number}`
    );
    this.setState({ fact: request.data });
  }

  render() {
    return (
      <div className="NumberFact">Class Component Fact: {this.state.fact}</div>
    );
  }
}
