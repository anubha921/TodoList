import React, { useState } from 'react'

function TodoList() {
    const [activity,setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity(){
        // asynchronous way
        // setListData([...listData,activity]) 
        // console.log(listData)

        // synchronous way
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
    <div className='d-flex justify-content-center flex-column align-items-center mx-auto w-50 text-white' style={{backgroundColor:"rgb(37 15 107)"}}>
        <div>
        <h1 style={{"textAlign":"center","margin":"20px"}}>TODO LIST</h1>
        <div style={{}}>
            <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)} style={{height:"3rem",width:"35rem",borderRadius:"12px"}}/>
            <button className='btn btn-success btn-lg px-4 mx-2' onClick={addActivity}>Add</button>
        </div>        
        <h1 className='d-inline-block' style={{"backgroundColor":"#1A7389","color":"black","margin":"10px"}}>Here is your list :{")"}</h1>
        {listData!==[] && listData.map((data,i)=>{
            return(
                <div key={i} style={{backgroundColor:'#17064E',fontSize:"1.7rem"}}>{data}
                    <button className='btn btn-success px-4 float-end' onClick={()=>removeActivity(i)}>Remove</button>
                </div>
            )
        }        
        )}
        {listData.length>0 && <button className='btn btn-success btn-lg px-4 mx-auto d-block mt-4' onClick={()=>{setListData("")}}>Remove All</button>}                         
        </div>
        
    </div>
  )
}

export default TodoList
