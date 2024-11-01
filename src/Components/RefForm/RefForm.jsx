import React, { useEffect, useRef } from 'react'

export default function RefForm() {
const nameRef=useRef(null)
const emailref=useRef(null)
const phoneref=useRef(null)


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Form Submitted");
    
        console.log(nameRef.current.value);
        console.log(phoneref.current.value);
        useEffect(()=>{
            nameRef.current.focus()
        },[])
    }
  return (  
    <div>
<form action="" className='space-y-2' onSubmit={handleSubmit}>
    
    <input ref={nameRef}   type="text" placeholder="name" name='name'
     className="input input-bordered w-full max-w-xs" />
     <br />
    <input ref={emailref}   type="email" placeholder="email" name='email'
     className="input input-bordered w-full max-w-xs" />
     <br />
    <input ref={phoneref}   type="text" placeholder="phone" name='phone'
     className="input input-bordered w-full max-w-xs" />
     <br />
    <input   type="submit" value="submit" name='button'
     className="input  w-full max-w-xs bg-purple-600" />
     <br />

</form>


    </div>
  )
}
