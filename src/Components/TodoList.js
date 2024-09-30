import React from 'react'

const TodoList = ({list,deleteItem,editItem}) => {
  return (
    <ul className='list-group'>
        {list.map((item,index)=>(
            <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
                {item.value}
                <div>
                    <button className='btn btn-light' style={{marginRight:"10px"}} onClick={()=> deleteItem(item.id)}>Delete</button>
                    <button className='btn btn-light'  onClick={()=> editItem(index)}>Edit</button>
                    
                </div>
            </li>
        ))}
    </ul>
  )
}

export default TodoList