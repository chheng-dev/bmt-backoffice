import React from 'react';
import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Sidebar from '../../Layouts/Sidebar';
import Foot from '../../Layouts/Footer';
import Container from './Container';

const Homepage = () => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            {/* sidebar */}
            <Sidebar />

            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                    }}
                />
                

                
                {/* Container */}
                <Container/>

                {/* Footer */}
                <Foot />
            </Layout>
        </Layout>
    );
};
export default Homepage;