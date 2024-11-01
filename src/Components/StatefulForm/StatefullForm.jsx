import { useState } from "react";


export default function StatefullForm() {
const[v,setV]=useState(null)

    const handleSubmit=(e)=>{
console.log("Form Submitted");
e.preventDefault()
console.log(v);
    }

    const handleChange=(e)=>{
      setV(e.target.value);
    }
  return (
    <div>
 <form action="" onSubmit={handleSubmit}>
<input type="text" className="border-2" onChange={handleChange} />
<input type="submit" value="submit" className="bg-green-500"/>

</form>
    </div>
  )
}
