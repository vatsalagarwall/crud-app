import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Read = () => {
    const [data,setData] = useState([])
    const [tabledark, setTableDark] = useState("")
    const [mode, setMode] = useState("Switch to Dark Mode")
    // const [isDeleting, setIsDeleting] = useState(false)
   
    function getData(){
        axios.get("https://6512686eb8c6ce52b39596dc.mockapi.io/crud-app").then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])
    
    const handleDelete = (id) =>{
        // setIsDeleting(true);
        axios.delete(`https://6512686eb8c6ce52b39596dc.mockapi.io/crud-app/${id}`).then(()=>{
            // setIsDeleting(false)
            getData()
        })
    }

    const setToLocalStorage = (id,name,email) =>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }
    
    
  return (
    <>
    <div className="form-check form-switch mx-2 m-2">
    <label class="form-check-label" for="flexSwitchCheckDefault">{mode}</label>
  <input className="form-check-input" type="checkbox"onClick={()=>{
    if(tabledark==='table-dark'){
        setTableDark('')
        setMode("Switch to Dark Mode")
    }
    else{
        setTableDark("table-dark")
        setMode("Switch to Light Mode")
    }
  }}/>
  
  
</div>
    <div className='d-flex justify-content-between m-2'>
        <h2>Read Data</h2>
        <Link to="/">
          <button className='btn btn-secondary' 
          // onClick={showData} we can do it using function also instead of Link
          >Create New Data</button>
        </Link>
        
    </div>
        <table className={`table ${tabledark}`}>
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        {data.map((myData)=>{
            return(
                <>
                 <tbody>
                    <tr>
                        <th scope="row">{myData.id}</th>
                        <td>{myData.name}</td>
                        <td>{myData.email}</td>
                        <td>
                            <Link to="/update">
                                <button className="btn btn-success"
                                onClick={()=>setToLocalStorage(myData.id,
                                    myData.name,
                                    myData.email
                                )}>Edit</button>
                            </Link>
                            
                        </td>
                        <td>
                            <button className="btn btn-danger" 
                            // disabled={isDeleting}
                             onClick={()=>handleDelete(myData.id)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
                </>
            )
        })}
       
        </table>
    </>
  )
}

export default Read