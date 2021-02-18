import styles from './incrementButton.module.css';
import { Component } from 'react';

export default class IncrementButton extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        count: ++prevState.count,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        count: --prevState.count,
      };
    });
  };

  componentDidUpdate() {
    localStorage.setItem('_increment', JSON.stringify(this.state));
  }

  componentDidMount() {
    const data = localStorage.getItem('_increment');
    if (data) {
      this.setState((prevState) => {
        return JSON.parse(data);
      });
    }
  }
  render() {
    return (
      <div>
        <div className={styles.number}>{this.state.count}</div>
        <button onClick={this.handleIncrement} className={styles.button}>
          Don't Click
        </button>
      </div>
    );
  }
}
