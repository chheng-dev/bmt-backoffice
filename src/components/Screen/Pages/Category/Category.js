import React, { useEffect, useState, Fragment } from "react";
import { Table, Button } from 'antd';
import { Switch, Route,Link,withRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Space } from "antd";
import Column from "antd/es/table/Column";
import Loading from "../Loading";
import axios from "axios"
import CreateCategory from "./Create";

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};



const Category = (props) => {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false)
    const loadCateogry = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://api.escuelajs.co/api/v1/categories`);
            const data = await respone.json();
            setCategory(data)
            console.log(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const handleDeleteCategory = async (record) => {
        let categoryId = record.id;
        console.log(categoryId)
        setLoading(true);
        await axios.delete(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
            .then(() => {
                setLoading(false);
            }, [])

    }

    useEffect(() => {
        loadCateogry();
    }, [])

    if (loading) {
        return <Loading />
    }
    const {match} = props;
    return (
        
        <>
            <Fragment>
                <div className="w-full h-full">
                    <div className="flex justify-end items-center mb-4">

                        <Link to={`${match.path}/create`}>
                            <button type="button" className="btn-primary">
                                Create Category
                            </button>

                        </Link>


                    </div>
                    <Table className="shadow-sm rounded-lg" bordered size={"small"} dataSource={category} onChange={onChange} pagination={6} scroll={{ x: 1300 }}>
                        <Column
                            title="Category name"
                            dataIndex="name"
                            key="1"
                            render={(name) => (
                                <>
                                    <span className="bg-gray-400 px-3 rounded-lg text-white py-1">{name}</span>
                                </>
                            )}
                        />
                        <Column
                            title="Slug"
                            dataIndex="name"
                            key="2"
                        />
                        <Column
                            title="Image"
                            dataIndex="image"
                            key="3"
                            width={200}
                            render={(image) => (
                                <>
                                    <img src={image} className="w-16 rounded-lg" />
                                </>
                            )}
                        />
                        <Column
                            title="Action"
                            key="4"
                            width={200}
                            render={(text, record) => (
                                <>
                                    <Space>
                                        <Link to={`${record.id}`}>
                                            <Button>Edit</Button>
                                        </Link>
                                        <Link>
                                            <Button type="primary" onClick={() => handleDeleteCategory(record)} danger>Delete</Button>
                                        </Link>
                                    </Space>
                                </>
                            )}
                        />
                    </Table>



                </div>
            </Fragment>
        </>
    )
}

export default withRouter(Category);