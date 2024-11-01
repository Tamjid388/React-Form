

 function SimpleForm(){
    const handleSubmit=(e)=>{
        console.log("Form SUbmitted");
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return(
        <div>
          <form action="" onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
      Name
    </label>
    <input
      type="text"
      name="name"
      className="w-full p-2 border-2 border-rose-500 rounded focus:outline-none focus:border-rose-700"
      placeholder="Enter your name"
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
      Email
    </label>
    <input
      name="email"
      type="text"
      className="w-full p-2 border-2 border-rose-200 rounded focus:outline-none focus:border-rose-500"
      placeholder="Enter your email"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
      Phone
    </label>
    <input
      name="phone"
      type="number"
      className="w-full p-2 border-2 border-rose-200 rounded focus:outline-none focus:border-rose-500"
      placeholder="Enter your email"
    />
  </div>
  
  <div className="text-center">
    <input
      type="submit"
      value="Submit"
      className="w-full py-2 px-4 bg-rose-500 text-white font-semibold rounded hover:bg-rose-600 transition duration-200 cursor-pointer"
    />
  </div>
</form>


        </div>
    )
}
 
export default SimpleForm