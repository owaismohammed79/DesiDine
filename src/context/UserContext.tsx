import { createContext } from "react";

const UserContext = createContext({
    userInfo: "Default User"
})

export default UserContext