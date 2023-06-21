import React from "react"
import Topbar from "../Topbar/Topbar"
import Sidebar from "../Sidebar/Sidebar"
import Main from "../Main/Main.jsx"
import { Outlet } from "react-router-dom"
import "./MainLayout.css"
const MainLayout = () => {
    return (
        <>
            <div className=" ">
                <div className="row">
                    <div className="col-sm-3">
                        <Sidebar />
                    </div>
                     <div className="  Topbar ">
                        <div className="row">
                            <div className=" px-3  ">
                                <Topbar />
                            </div>

                        </div>
                    </div>
                    <div className=" MainStyle  mt-6 h-100  ">
                        <div className="column">
                            <div className="">
                                <Main />
                                {Outlet}
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
        </>
    )
}
export default MainLayout