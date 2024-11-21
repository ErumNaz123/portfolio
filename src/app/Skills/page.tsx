import Navbar from "../components/navbar";

export default function Skills() {
    return (
     
    <div>

    <Navbar/>

<div className="bg-blue-500 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-purple-500 m-5 sm:m-10 p-5 sm:p-8 text-center font-mono rounded-md sm:text-3xl md:text-4xl lg:text-5xl">
𝑰 𝒉𝒂𝒗𝒆 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒔 𝒐𝒏 𝒕𝒉𝒆𝒔𝒆 𝑺𝒌𝒊𝒍𝒍𝒔
</div>

<div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 p-5 font-bold">
  <div className="bg-blue-200 text-blue-950 p-5 sm:p-8 text-2xl sm:text-3xl rounded-md">
    <i className="fa-brands fa-js"></i> <span> 95% </span>
  </div>
  <div className="bg-green-400 text-blue-950 p-5 sm:p-8 text-2xl sm:text-3xl rounded-md">
    <i className="fa-brands fa-html5"></i> <span> 95% </span>
  </div>
  <div className="bg-yellow-300 text-blue-950 p-5 sm:p-8 text-2xl sm:text-3xl rounded-md">
    <i className="fa-brands fa-css3-alt"></i> <span> 60% </span>
  </div>
  <div className="bg-blue-300 text-blue-950 p-5 sm:p-8 text-2xl sm:text-3xl rounded-md">
    <i className="fa-solid fa-file-word"></i> <span> 80% </span>
  </div>
</div>

</div>

)
  };
