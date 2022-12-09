import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../Layouts/Sidebar';
import Foot from '../../Layouts/Footer';
import Container from './Container';
import Header from '../../Layouts/Header';

const Homepage = () => {
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
                <Header/>
                
                {/* Container */}
                <Container/>

                {/* Footer */}
                <Foot />
            </Layout>
        </Layout>
    );
};
export default Homepage;