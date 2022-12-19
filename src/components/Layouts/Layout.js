import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Foot from './Footer';
// import Container from './Container';
import Header from './Header';
import { Content } from 'antd/es/layout/layout';

const LayoutContent = (props) => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            {/* sidebar */}
            <Sidebar />

            <Layout className="site-layout rounded-lg h-90vh" style={{

            }}>
                <Header />

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    {props.children}
                </Content>

                {/* Footer */}
                <Foot />
            </Layout>
        </Layout>
    );
};
export default LayoutContent;