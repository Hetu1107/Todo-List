import React,{useReducer,useEffect, useState} from 'react'
import "./TodoManage.css"
let count = -1;
const InitialState = [
    
]
const reducer = (state,action) =>{
    if (count === -1 && action.dash.trim() != ''){
        count+=1;
        return [{id: count,Task : action.dash}]
    }
    else if(action.id){
        return state.filter((x)=> x.id !== action.dash)
    }
    else if(action.dash.trim() == ''){
        return state
    }
    else{
        count+=1;
    return  [...state,{id : count,Task : action.dash}]
    }

}
function TodoManage() {
    const [Task,dispatch] = useReducer(reducer,InitialState);
    const [val,changeval] = useState('');

useEffect(()=>{
        console.log(Task);
        console.log(count);
},[Task])
    return (
        <div className="main">
        <h1>Todo List</h1>
        <div className="input">
            <input value={val} onChange={(e) => changeval(e.target.value)} onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    return dispatch({dash : val,id : false})
                }
            }}></input>
            <button onClick={()=>dispatch({dash : val,id : false})}>Add-Task</button>
            </div>
            <div className="list">
                {
                    Task.map((res,index) => {
                        return(
                        <div key={index+60} className="list_box">
                                <h3  key={res.id}>{res.Task}</h3>
                                <i onClick={()=>dispatch({dash: res.id,id : true})} class="fas fa-trash-alt del"></i>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default TodoManage
