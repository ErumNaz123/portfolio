import { Button } from "@/components/ui/button"


import Navbar from "../components/navbar";
export default function Home() {
    return (
     
    <div>
        <Navbar />
      <div>
    
      <div className=" text-red-500 shadow-lg text-4xl font-bold  m-5 text-justify mx-20 inline-block">𝐺𝑒𝑡 𝑰𝑛 𝑻𝑜𝑢𝑐𝒽 𝑤𝑖𝑡𝒽 𝑼𝑠</div>

      <div>

      <form className="grid items-center justify-center gap-6 p-10 text-xl bg-gray-300  text-white">

  <div className="w-full">
    <input
      id="name"
      type="text"
      placeholder="Enter your Name Here"
      className="w-full p-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>

  
  <div className="w-full">
    <input
      type="email"
      name="email"
      placeholder="Enter your Email Here"
      className="w-full p-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>


  <div className="w-full">
    <input
      type="tel"
      name="phone"
      placeholder="Enter your Phone Number"
      className="w-full p-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
       
  <img src="https://tse2.mm.bing.net/th?id=OIP.FGg7PXxc-oN7CGTGFU23MgHaDt&pid=Api&P=0&h=220 " alt="" className="h-40 rounded-2xl"/>

  
  <div className="w-full">
    <button
      type="submit"
      className="w-full p-4 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Submit
    </button>
  </div>
</form>

      </div>
        
      </div>
    </div>
    );
  }
  