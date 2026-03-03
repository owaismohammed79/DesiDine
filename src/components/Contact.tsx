import { ReactElement, useContext } from "react";
import UserContext from "../context/UserContext";

function Contact(): ReactElement {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="max-w-md mx-auto py-10 px-4 min-h-[70vh]">
      <p className="text-amber-800 font-medium mb-6 text-center italic">
        {`Hey ${userInfo}, how can we help?`}
      </p>
      <h2 className="text-3xl font-black text-amber-900 mb-6 text-center">Contact Us</h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-bold text-amber-900 ml-1">Name</label>
          <input type="text" placeholder="John Doe" id="name" className="border border-amber-200 p-3 rounded-xl outline-amber-500 focus:bg-amber-50 transition-all"/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="query" className="text-sm font-bold text-amber-900 ml-1">Query</label>
          <textarea placeholder="Tell us something..." id="query" className="border border-amber-200 p-3 rounded-xl h-32 outline-amber-500 focus:bg-amber-50 transition-all resize-none"/>
        </div>

        <button className="bg-amber-500 text-white font-bold p-3 rounded-xl mt-2 hover:bg-amber-600 transition-all cursor-pointer shadow-md active:scale-95">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact;
