import React from 'react'

const TodoInput = ({input, updateInput, addItem}) => {
    return (
        <div className='input-group mb-3'>
            <input type='text' className='form-control userinput' value={input} onChange={(item) => updateInput(item.target.value)} />
            <div className='input-group-append'>
                <button className='btn btn-dark'onClick={addItem} >ADD</button>
            </div>
        </div>

    )
}

export default TodoInput