
import { BiMessageSquareAdd } from 'react-icons/bi';
import TodoList from './TodoList';

//從APP.jsx收到的參數及值
const Form = ({ setInputText, inputText, todos, setTodos, tab, setTab}) => {

  //當inputText異動時，則觸發此function
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  }

  //當點擊送出時，觸發此function
  const submitTodo = (event) => {

    //如果button的type=button，因為它會變成純按鈕，則不需要添加event.preventDefault()
    // event.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 999
      }
    ])

    setInputText('');
  }

  //監聽事件，假如tab異動，則觸發此function
  const handlerSelect = (event) => {
    setTab(event.target.value);
  }

  return (
    <form>
      <input type="text" className="todo-input" placeholder="請輸入代辦事項" value={inputText} onChange={inputTextHandler} />
      <button type="button" className="todo-button" onClick={submitTodo}>
        <BiMessageSquareAdd />
      </button>
      <div className="select">
        <select name="tab" onChange={handlerSelect}>
          <option value="all">全部</option>
          <option value="completed">已完成</option>
          <option value="uncompleted">待完成</option>
        </select>
      </div>
    </form>
  )
}

//輸出給別人使用
export default Form