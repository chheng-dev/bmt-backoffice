import React, { useState, Fragment } from "react";
import Input from "antd/es/input/Input";
import { Form,Button } from "antd";
import axios from "axios"
import Loading from "../Loading";

const CreateCategory = () => {
    const [loading, setLoading] = useState(false)
    const [category, setCategoryName] = useState('');
    const [slug, setSlugName] = useState('');
    const handleCreateCategory = async () => {
        try {
            setLoading(true)
            await axios.post(`https://api.escuelajs.co/api/v1/categories`, {
                name: category,
                image: "https://burst.shopifycdn.com/photos/crowd-participating-at-event.jpg?width=1200&format=pjpg&exif=1&iptc=1"
            }, []).then(() => {
                setLoading(false)
            })


        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Fragment>

                <div className="w-full">
                    <div className="my-4 flex bg-white p-4">
                        <h2 className="text-xl font-bold">Create Category</h2>
                    </div>
                    <div className="w-full bg-white p-4">

                        <div className="max-w-4xl mx-auto">
                            <Form
                                name="Category"
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
                                        <Input onChange={(e) => setCategoryName(e.target.value)} />
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
                                        <Input onChange={(e) => setSlugName(e.target.value)} />
                                    </Form.Item>
                                </div>
                                <div className="mt-3 mb-1 flex justify-end items-center">
                                    <Button type="primary" htmlType="submit">Save & Continue</Button>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
            </Fragment>
        </>
    )
}

export default CreateCategory