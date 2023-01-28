import React, { useState } from 'react'

function TodoList() {
    const [activity,setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity(){
        setListData((listData)=>{
            const updatedList = [...listData,activity]
            setActivity("")
            return updatedList
        })
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem,id)=>{
            return i!== id;
        })
        setListData(updatedListData)
    }

  return (
    <div className='d-flex justify-content-center flex-column align-items-center mx-auto w-50 text-black homeContainer'>
        <div>
        <h1 style={{"textAlign":"center","margin":"20px"}}>TODO LIST</h1>
        <div>
            <input className='new-task-input' type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button className='add-btn' onClick={addActivity}>Add</button>
        </div>        
        <h1 className='d-inline-block' style={{"backgroundColor":"#1A7389","color":"black","margin":"10px"}}>Here is your list :{")"}</h1>
        {listData!==[] && listData.map((data,i)=>{
            return(
                <div className='task-list' key={i}>{data}
                    <button className='remove-btn' onClick={()=>removeActivity(i)}>Remove</button>
                </div>
            )
        }        
        )}
        {listData.length>0 && <button className='remove-all-btn' onClick={()=>{setListData([])}}>Remove All</button>}                         
        </div>
    </div>
  )
}

export default TodoList
