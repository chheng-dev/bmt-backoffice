import React, { useEffect, useState } from "react";
import { Table, Button } from 'antd';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Space } from "antd";
import Column from "antd/es/table/Column";
import Loading from "../Loading";
import axios from "axios"
import { ExclamationCircleFilled } from '@ant-design/icons';
import confirm from "antd/es/modal/confirm";


const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};



const Category = () => {

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

    const showDeleteConfirm = (record) => {
        console.log(record)
        confirm({
          title: 'Are you sure delete this task?',
          icon: <ExclamationCircleFilled />,
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          async onOk() {
            const categoryId = record.id;
            console.log(categoryId)
            setLoading(true);
            await axios.delete(`https://api.escuelajs.co/api/v1/categories/6`)
                .then(() => {
                    setLoading(false);

                }, [])
            setLoading(false);

          },
          onCancel() {
            console.log('Cancel');
          },
          
        });
      };

    const handleDeleteCategory = async (record) => {
        const categoryId = record.id;
        console.log(categoryId)
        setLoading(true);
        await axios.delete(`https://api.escuelajs.co/api/v1/categories/6`)
            .then(() => {
                setLoading(false);

            }, [])
        setLoading(false);
    }

    useEffect(() => {
        loadCateogry();
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="w-full h-full">
                <div className="flex justify-end items-center mb-4">
                    <Button type="button" className="bg-success text-white px-5">
                        <Link to="/category/create">
                            Create Category
                        </Link>

                    </Button>

                </div>
                <Table className="shadow-sm rounded-lg" bordered size={"small"} dataSource={category} onChange={onChange} pagination={10}>
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
            <Outlet />
        </>
    )
}

export default Category;