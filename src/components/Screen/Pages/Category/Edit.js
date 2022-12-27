import React, { useEffect, useState } from "react";
import Input from "antd/es/input/Input";
import { Button, Form } from "antd";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import axios from "axios";


const EditCategory = () => {

    const paramId = useParams();
    const [category, setCategory] = useState("");
    const [slug, setSlugName] = useState('');
    const [loading, setLoading] = useState(false)

    const getCategoryById = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://api.escuelajs.co/api/v1/categories/${paramId.id}`);
            const data = await respone.json();
            setCategory(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const handleEdit = async () => {
        try {
            setLoading(true)
            await axios.put(`https://api.escuelajs.co/api/v1/categories/${paramId}`, {
                name: category,
                image: "https://media.istockphoto.com/id/597940046/photo/casual-catering-discussion-meeting-colleagues-concept.jpg?s=612x612&w=0&k=20&c=xRC_Vtd_LZ2HsvIyMkmhqAgVeQGV0vX5j-Nj90vPCHQ="
            }).then(() => {
                setLoading(false);
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getCategoryById();
    }, [])


    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="w-full">
                <div className="my-4 flex bg-white p-4">
                    <h2 className="text-xl font-bold">Update Category</h2>
                </div>
                <div className="w-full bg-white p-4">

                    <div className="max-w-4xl mx-auto">
                        <Form
                            name="Update Category"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="off"
                        >
                            <h1 className="text-xl font-semibold mb-4">Category Info</h1>
                            <div>
                                <Form.Item
                                    label="Category"
                                    name="category"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your category!',
                                        },
                                    ]}
                                >
                                    <Input value={category.name} onChange={(e) => setCategory(e.target.value)} />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item
                                    label="Slug"
                                    name="slug"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your slug!',
                                        },
                                    ]}
                                >
                                    <Input value={category.name} onChange={(e) => setSlugName(e.target.value)} />
                                </Form.Item>
                            </div>
                            <div className="mt-3 mb-1 flex justify-end items-center">
                                <Button type="primary" htmlType="submit">Update & Continue</Button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditCategory