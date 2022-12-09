import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { BiHome,BiCategory,BiBell,BiUser,BiBarChartAlt } from "react-icons/bi";
import logo from "../assets/img/BMT-Logo-admin.png"

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const [current, setCurrent] = useState('1');

    const SelectedKey = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="bg-white">
                <div
                    className="bg-red-800"
                    style={{
                        height: 32,
                        margin: 16,
                    }}
                >
                    <img className="w-32 p-2" src={logo}/>
                </div>

                <Menu theme="light" onClick={SelectedKey} selectedKeys={[current]}>
                    <Menu.Item key="1">
                        <NavLink
                            to="/"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <BiHome />
                                <span className="ml-2">Dashboard</span>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink
                            to="/category"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <BiCategory />
                                <span className="ml-2">Category</span>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink
                            to="/event"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <BiBarChartAlt />
                                <span className="ml-2">Event</span>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink
                            to="/order"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <BiBell />
                                <span className="ml-2">Order List</span>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink
                            to="/events"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <BiUser />
                                <span className="ml-2">Customer List</span>
                            </span>

                        </NavLink>
                    </Menu.Item>
                </Menu>

            </Sider>

        </>
    )
}



export default Sidebar;
