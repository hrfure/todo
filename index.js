
function App(){
    const [todos, setTodos] = React.useState([
        {
        text: 'learn react',
        isCompleted: false,
        },
        {
        text: 'have salad for lunch',
        isCompleted: false,
        },
        {
        text: 'build todo app',
        isCompleted: false,
        },
        {
        text: 'work out',
        isCompleted: false,
        },
        {
        text: 'check flights to NYC',
        isCompleted: false,
        },
        {
        text: 'retrieve your passport',
        isCompleted: false,
        }
    ]);

   
   

    const addToDo = text => {
        const newTodos = [...todos, {text:text, isCompleted: false}];
        setTodos(newTodos);
    }


    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }

    return(<>
        <div className='app'>
            <div className='todo-list'>
             {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
            <ToDoForm addToDo ={addToDo}/>
            </div>
        </div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)