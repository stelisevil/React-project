class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['Take out the binds', 'Put a wash load on']
    }
  }
  render() {
    return (
      this.state.todos.map(todo => {
        return (
          <Todo task={todo} />
        )
      })
    )
  }
}

function Todo(props) {
  return <h1>{props.task}</h1>;
}
