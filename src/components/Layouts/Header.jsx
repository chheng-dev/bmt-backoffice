import React from "react";

const Header = () =>{
    const logout =()=>{
        console.log("hello")
        localStorage.removeItem('token-info');
    }
    return(
        <div className="w-full bg-white p-4 mb-4 shadow-md">
            <div className="flex">
                <div className="flex w-1/2 justify-start items-center">
                    <h1>Header</h1>
                </div>
                <div className="flex w-1/2 justify-end items-center">
                    <button onClick={logout} className="btn-primary">Logout</button>
                </div>
            </div>
        </div>  
    )
}

export default Header;