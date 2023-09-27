import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Update = () => {

    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

    const navigate = useNavigate();

    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.put(`https://6512686eb8c6ce52b39596dc.mockapi.io/crud-app/${id}`,{
            name:name,
            email:email,
        }).then(()=>{
            navigate("/read")
        })
    }
  return (
    <>  
        <h2>Update Details</h2>
        <form >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" value={name} 
          className="form-control" 
          onChange={(e)=>setName(e.target.value)}
           />

          </div>
          <div className="mb-3">
          <label className='form-label'>Email Address</label>
          <input type="text" value={email} 
          className="form-control" 
          onChange={(e)=>setEmail(e.target.value)}
          />
          </div>

          <button type="submit" onClick={handleUpdate} className="btn btn-primary mx-2">Update</button> 
          {/* onClick here in button or onSubmit in the <form> tag works */}
          <Link to="/read">
            <button type="submit" className="btn btn-secondary mx-2">Back</button> 
          </Link>
      </form>  
      
    </>
  ) 
}

export default Update