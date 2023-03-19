import { MdCheck, MdDeleteOutline } from 'react-icons/md';

//從下方的TodoList Function收到的參數及值
const Todo = ({
  todos, setTodos, text, todo
}) => {

  //如果代號事項點擊完成時，則觸發此function
  const completeTodo = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !todo.completed,
        }
      }
      return item
    }))
  }

  //如果代號事項點擊刪除時，則觸發此function
  const deleteTodo = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeTodo}>
        <MdCheck />
      </button>
      <button className="trash-btn" onClick={deleteTodo}>
        <MdDeleteOutline />
      </button>
    </div>
  )
}

//從APP.jsx收到的參數及值
const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className="todo-container">
      <div className="todo-list">
        {filterTodos?.map(todo => (
          <Todo
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )
}

//匯出TodoList給別人使用
export default TodoList