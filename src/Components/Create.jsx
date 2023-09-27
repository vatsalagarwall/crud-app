import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Create = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const history = useNavigate();

  const header = {"Access-Control-Allow-Origin": "*"}
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name.trim()==='' || email.trim()===''){
      alert("Enter data in all fields")
      return;
    }
    console.log("Submit Button Clicked");
    axios.post(
      'https://6512686eb8c6ce52b39596dc.mockapi.io/crud-app',
      {name:name, email:email, header: header}
    )
   .then(()=>{
    history("/read")
   })
  }

  // function showData(){ 
  //   history("/read")
  // }

  


  return (
    <>
      <div className='d-flex justify-content-between m-2'>
        <h2>Create</h2>
        <Link to="/read">
          <button className='btn btn-primary' 
          // onClick={showData} we can do it using function also instead of Link
          >Show Data</button>
        </Link>
        
      </div>
      <form >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />

          </div>
          <div className="mb-3">
          <label className='form-label'>Email Address</label>
          <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Create


