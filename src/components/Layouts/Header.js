import React from "react";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false
        };
    }
    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };
    render() {
        return (
            <div className="w-full bg-white p-4 mb-4 shadow-md">
                <div className="flex">
                    <div className="flex w-1/2 justify-start items-center">
                        <h1>Header</h1>
                    </div>
                    <div className="flex w-1/2 justify-end items-center">
                        <button onClick={this.signOut} href="#">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

