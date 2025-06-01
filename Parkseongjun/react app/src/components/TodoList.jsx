import { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import Diary from "./Diary";


export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // .trim 사용 시 공백 제거
    const handleAdd = () => {
        if (input.trim() === "") return;
        const newTodo = {
            id: Date.now(),
            title: input,
        };
        setTodos([...todos, newTodo]);
        setInput("");
    };


    return (
        <div>
            <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>추가</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Link to = {`/todo/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
            <h3>
                <Link to={`/Diary`}>나의 일기장</Link>
            </h3>

        </div>
    );
}

