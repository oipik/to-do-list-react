import { useState } from "react";
import { editTask } from '../reducer/todosSlice';
import { useDispatch } from "react-redux";

const EditTodoForm = ({todo}) => {

    const [value, setValue] = useState(todo.task);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(editTask({id: todo.id, task: value, isEdit: !todo.isEdit}))
    }

    return (
        <form className="wrapper__form" onSubmit={(e) => handleSubmit(e)}>
            <input
                className="wrapper__input"
                type="text"
                placeholder="What do you want to do"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button className="wrapper__btn">Update</button>
        </form>
    )
}

export default EditTodoForm;