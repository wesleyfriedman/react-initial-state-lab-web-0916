const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    let text = this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'
    return (
      <div>{text}</div>
    );
  }
}
module.exports = Bomb;
