import { Route, Routes } from "react-router-dom"
import { publicRoutes } from "./routes"
import React from "react"

const AppRoute = ()=>{
    return(
        <Routes>
            {publicRoutes.map((el, index)=>(
                <React.Fragment key={index}>
                    <Route path={el.path} element={el.element}/>
                </React.Fragment>
            ))}
        </Routes>
    )
}
export default AppRoute