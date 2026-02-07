import { ReactElement, useContext } from "react";
import UserContext from "../context/UserContext";

function Contact(): ReactElement {
  const { userInfo } = useContext(UserContext);

  return <div className="m-2 p-2">{`Nothing to see here ${userInfo}`}</div>;
}

export default Contact;
