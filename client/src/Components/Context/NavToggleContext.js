import { useState , createContext , useContext } from "react";

const toggleContext = createContext();

const ToggleProvider = ({children})=>{
  const [toggle, setToggle] = useState(false);
    return (
        <toggleContext.Provider value={[toggle, setToggle]} >
            {children}
        </toggleContext.Provider>
    )
}

const useToggle=()=>useContext(toggleContext)

export {useToggle , ToggleProvider}