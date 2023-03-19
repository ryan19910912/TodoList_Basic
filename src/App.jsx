import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

//主頁面
function App() {

  //輸入文字的state
  const [inputText, setInputText] = useState('')

  //tab的state
  const [tab, setTab] = useState('all')

  //存放顯示在畫面上的todo object的state
  const [filterTodos, setFilterTodos] = useState([])

  //存放全部資料的todo object的state
  const [todos, setTodos] = useState([
    // { text: '寫作業', completed: false, id: 1 },
    // { text: '閱讀', completed: false, id: 2 },
    // { text: '進修', completed: false, id: 3 }
  ])

  //tab改變狀態時的過濾器 - 把符合tab狀態的todo存進filterTodos
  const handleFilter = () => {
    switch (tab) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed))
        break
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => !todo.completed))
        break
      default:
        setFilterTodos(todos)
        break
    }
  }

  //tab跟todos異動時的監聽器, 當有異動時，則觸發handleFilter function
  useEffect(() => {
    handleFilter()
  }, [tab, todos])

  return (
    <div className="App">
      <div className='container'>

        <header>
          Ryan's TodoList
        </header>

      </div>

      {/* 傳參數及值給Form.jsx，這樣Form.jxs才能對該參數進行使用 */}
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        tab={tab}
        setTab={setTab}
      />

      {/* 傳參數及值給TodoList.jsx，這樣TodoList.jsx才能對該參數進行使用 */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
      />

    </div>
  )
}

//輸出給別人使用
export default App