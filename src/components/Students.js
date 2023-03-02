import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Students({ students, handleDelete}) {
  const[clicked, setClicked] = useState(false)
  const[name, setName]=useState('')
  const[email, setEmail]=useState('')
  const[phone, setPhone]=useState('')
  console.log(name,email, phone)
  function handleClick(id) {
    fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // window.location.reload();
      });
    handleDelete();
  }


  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        window.location.reload();
      });
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center mb-5">
        <div className="sm:flex-auto">
          <h1 className="text-xl text-center font-semibold text-gray-600 pt-10 pb-5">
            Students List
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
          onClick={() => setClicked(true)}
            type="button"
            className="block rounded-md bg-[#c084fc] py-3 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Student
          </button>
        </div>
      </div>
{      clicked?(<div>
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
      </div>):(null)}
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="">Update</span>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {students.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                        <Link
                          to={`/students/${person.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          onClick={() => {
                            handleClick(person.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="red"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
