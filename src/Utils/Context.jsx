import { createContext, useState } from "react";


export const myContext = createContext();

const AppContext = ({children})=>{

  const [ categories , setCategories ] =useState()
  const [ products, setProducts ] = useState()
  const [ banner , setbanner ] = useState()
  console.log("Categories in context:", categories);
  return(
    <myContext.Provider value={{categories , setCategories ,products, setProducts ,banner , setbanner }} >
     {children}
    </myContext.Provider>
  )
}

export default AppContext;