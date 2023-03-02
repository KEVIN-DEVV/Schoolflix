import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
const SingleStudent = () => {
    const[student, setStudent] =useState([])
    const[name, setName]=useState('')
    const[email, setEmail]=useState('')
    const[phone, setPhone]=useState('')
    const {id}=useParams()
    // const navigation = useNavigation()
    console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:3000/students/${id}`)
        .then((response)=>response.json())
        .then(data=>{
            console.log(data)
            setStudent(data)
        })

    },[id])

    function handleSubmit(){
        fetch(`http://localhost:3000/students/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                email:email,
                phone:phone
            })
        })
      .then((response)=>{
        if(response.ok){
            // navigation('/students')
        }
      })
      
    }

  return (
    <>
    <div>
        <h1 className='text-center pt-10 text-2xl text-gray-600'>Want to Update Details for <span className='font-bold capitalize'>{student.name}</span>? Kindly fill the form below.</h1>
    </div>
    <div className='items-center flex justify-center'>
        <form onSubmit={handleSubmit}>
          <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-6 items-center">
            <div className="">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  onChange={(e)=>setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter full name"
                  className="py-3.5 pl-4 pr-3 border text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  onChange={(e)=>setPhone(e.target.value)}
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone number"
                  className="py-3.5 pl-4 pr-3 border text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  className="py-3.5 pl-4 pr-3 border text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  />
              </div>
            </div>
            <div className="">
              <div className="mt-4">
                <input
                type="submit"
                value="submit"
                  className="py-3.5 bg-[#c084fc] text-white hover:bg-indigo-500  rounded pr-3 border text-center text-sm font-semibold sm:pl-6"
                  />
              </div>
            </div>
          </div>
        </form>
      </div>

    </>
    
  )
}

export default SingleStudent