import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Menu, Space } from "antd";
import { NavLink } from "react-router-dom";
import { FiBarChart,FiHome,FiGrid,FiFolderMinus,FiUsers } from "react-icons/fi";
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
                    className="px-2"
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
                            to={`/`}
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                            <Space>
                                <FiHome className="text-xl"/>
                                <span>Dashboard</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink
                            to={"/admin/category"}
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                            <Space>
                                <FiGrid className="text-xl"/>
                                <span>Category</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink
                            to="/admin/event"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <Space>
                                <FiFolderMinus className="text-xl"/>
                                <span >Event</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink
                            to="/admin/order"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                            <Space>
                                <FiBarChart className="text-xl" />
                                <span>Order List</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink
                            to="admin/events"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                            <Space>
                                <FiUsers className="text-xl"/>
                                <span>Customer List</span>
                                </Space>
                            </span>

                        </NavLink>
                    </Menu.Item>
                </Menu>

            </Sider>

        </>
    )
}



export default Sidebar;
