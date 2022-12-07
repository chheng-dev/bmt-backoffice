import React from "react";
import { Content } from "antd/es/layout/layout";
import Breadcrumb from "../../Layouts/Breadcrumb";
import Card from "../../Card"
import { Routes, Route } from 'react-router-dom';
import Category from "./Category/Category";
import CreateCategory from "./Category/Create";
import EditCategory from "./Category/Edit";
import NotFound from "./404";
import { Test } from "../../../Test";

const Container = () => {
    return (
        <Content
            style={{
                margin: '0 16px',
            }}
        >

            {/* Breadcrumb */}
            <Breadcrumb />

            <div
                className="w-full h-90vh"

            >
                <Routes>
                    <Route  path="/" element={<Card />} />
                    <Route path="category" element={<Category />}></Route>
                    <Route path="/category/:id" element={<EditCategory />}/>
                    <Route path="/category/create" element={<CreateCategory />}/>
                    <Route path="/test" element={<Test />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                {/* Card  */}


            </div>
        </Content>
    )
}

export default Container;