export default class Boss extends React.Component {
  render() {
    let hp;
    const difficulty = this.props.difficulty;
    switch (difficulty) {
      case 'Easy':
        hp = 100;
        break;
      case 'Medium':
        hp = 500;
        break;
      case 'Hard':
        hp = 1000;
        break;
    }
    return (
      <p>My HP is {hp}</p>
    )
  }
}
