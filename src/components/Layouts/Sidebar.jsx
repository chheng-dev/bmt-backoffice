import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const [current, setCurrent] = useState('1');

    const SelectedKey = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    //   const items = [
    //     { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    //     { label: 'item 2', key: 'item-2' }, // which is required
    //   ];

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    className="bg-gray-800"
                    style={{
                        height: 32,
                        margin: 16,
                    }}
                />

                <Menu theme="dark" onClick={SelectedKey} selectedKeys={[current]}>
                    <Menu.Item key="1">
                        <NavLink
                            to="/"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <DesktopOutlined />
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
                                <FileOutlined />
                                <span className="ml-2">Category</span>
                            </span>

                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink
                            to="/events"
                            className={isActive =>
                                "nav-link" + (!isActive ? " unselected" : "")
                            }
                        >

                            <span className="flex items-center">
                                <PieChartOutlined />
                                <span className="ml-2">Event</span>
                            </span>

                        </NavLink>
                    </Menu.Item>
                </Menu>

            </Sider>

        </>
    )
}



export default Sidebar;
