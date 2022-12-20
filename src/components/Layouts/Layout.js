import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Foot from './Footer';
import { Content } from 'antd/es/layout/layout';
import { Redirect } from "react-router-dom";

class LayoutContent extends React.Component {
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
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        return (
            <>

                <Layout
                    style={{
                        minHeight: '100vh',
                    }}
                >

                    {/* sidebar */}
                    <Sidebar />

                    <Layout className="site-layout rounded-lg h-90vh" style={{

                    }}>

                        <div className="w-full bg-white p-4 mb-4 shadow-md">
                            <div className="flex">
                                <div className="flex w-1/2 justify-start items-center">
                                    <h1>Header</h1>
                                </div>
                                <div className="flex w-1/2 justify-end items-center">
                                    <button onClick={this.signOut} href="#" className='btn-primary'>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Content
                            style={{
                                margin: '0 16px',
                            }}
                        >
                            {this.props.children}
                        </Content>
                        <Foot />
                    </Layout>
                </Layout>
            </>
        );
    }
};
export default LayoutContent;