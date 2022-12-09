import React, { useState } from "react";
import Input from "antd/es/input/Input";
import { Button, Select } from "antd";
import { Radio } from "antd";
import { InputNumber } from "antd";
import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';



const CreateEvent = () => {

    const uploadButton = (
        <div>
            {<PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    // const [loading, setLoading] = useState(false);
    return (

        <div className="w-full">
            <div className="my-4 flex bg-white p-4">
                <h2 className="text-xl font-bold">Create Event</h2>
            </div>
            <div className="w-full bg-white p-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-xl font-semibold mb-4">Basic Info</h1>
                    <div class="mb-6">
                        <h3 for="full-name" class="leading-7 text-sm text-gray-600">Event Title</h3>
                        <Input />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent;