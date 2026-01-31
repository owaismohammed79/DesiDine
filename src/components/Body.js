import React from "react";

function Body() {
  return (
    <div className="my-5">
      <div className="flex-center">
        <input type="text" placeholder="Mc Donald's" className="border rounded p-1 w-72"/>
        <button className="bg-slate-100 px-4 py-1 rounded mx-2 cursor-pointer">Search</button>
      </div>
    </div>
  )
}

export default Body;
