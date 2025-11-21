import { createContext } from "react"

const CustomCursorContext =
  createContext <
  CustomCursorType >
  {
    type: "default",
    setType: () => { }
  }

export default CustomCursorContext
