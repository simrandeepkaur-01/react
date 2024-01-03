import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(5);

    function add() {
        if (count === 20) {
            return setCount(count = 20);
        }
        setCount(count + 1);
    }

    function remove() {
        if (count === 0) {
            return setCount(count = 0);
        }
        setCount(count - 1);
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-2xl">The count is {count}</p>
            <div className="flex gap-2">
                <button onClick={add} className="bg-gray-200 ">Add Count {count}</button>
                <button onClick={remove} className="bg-gray-200 ">Remove Count {count}</button>
            </div>
        </div>
    )
}

export default Counter;