import { ReactElement, useContext } from "react";
import UserContext from "../context/UserContext";

function Contact(): ReactElement {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="flex flex-col h-screen">
      <div className="m-2 p-2">{`Want to contact us? ${userInfo}`}</div>
        <h2 className="text-3xl font-bold mx-auto mb-1">Contact Us</h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 border-gray-400 border-4 px-8 py-6 rounded-xl bg-white h-2/5 ">
        <label htmlFor="name" className="ml-1 md:text-lg">Name</label>
        <input type="text" placeholder="John Doe" id="name" className="border-2 p-2 rounded-xl md:h-12 md:mb-2"/>
        <label htmlFor="query" className="ml-1 md:text-lg">Query</label>
        <input type="text" placeholder="Why is this website so good?" id="query" className="border-2 p-2 rounded-xl md:h-12 md:mb-2 hover:bg-gray-200 focus:bg-gray-200"/>
        <button className="border-2 p-2 rounded-xl w-40 cursor-pointer hover:bg-gray-200">Send your query</button>
      </form>
    </div>
  )
}

export default Contact;
