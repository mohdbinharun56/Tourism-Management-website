import { Outlet } from "react-router-dom"
import Navbar from "./sharedComponents/Navbar/Navbar"

function Root() {

  return (
    <>
      <Navbar></Navbar>
      <div className="mt-20 absolute -z-10 w-full">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Root
