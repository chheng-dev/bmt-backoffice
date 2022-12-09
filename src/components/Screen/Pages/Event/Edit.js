import React,{useState} from "react";
import Input from "antd/es/input/Input";
import { Button, Select } from "antd";
import { Radio } from "antd";
import { InputNumber } from "antd";
import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


const EditEvent = () => {

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
                <h2 className="text-xl font-bold">Edit Event</h2>
            </div>
            <div className="my-4 w-full bg-white shadow-sm p-4 rounded-lg max-w-4xl">
                <div class="mb-4">
                    <h3 for="full-name" class="leading-7 text-sm text-gray-600 font-semibold">Event name</h3>
                    <Input />
                </div>
                <div class="mb-4">
                    <h3 for="full-name" class="leading-7 text-sm text-gray-600 font-semibold">Status</h3>
                    <div >
                        <Radio.Group >
                            <Radio value={1}>Approve</Radio>
                            <Radio value={2}>Pending</Radio>
                            <Radio value={3}>Cancel</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div class="mb-4">
                    <h3 for="full-name" class="leading-7 text-sm text-gray-600 font-semibold">Event Type</h3>
                    <Select
                        size={`middle`}
                        defaultValue="Football"
                        className="w-full"
                        options={[
                            {
                                label: 'Football',
                                value: 'football',
                            },
                            {
                                label: 'Concert',
                                value: 'concert',
                            },
                        ]}
                    />
                </div>
                <div class="mb-4">
                    <h3 for="full-name" class="leading-7 text-sm text-gray-600 font-semibold">Price</h3>
                    <InputNumber className="w-full" addonAfter="$" defaultValue={100} />
                </div>
                <div className="mb-4">
                <h3 for="full-name" class="leading-7 text-sm text-gray-600 font-semibold">Image</h3>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    >
                        {(
                            uploadButton
                        )}
                    </Upload>
                </div>
                <div class="">
                    <Button className="bg-blue-500 text-white">Update</Button>
                </div>
            </div>
        </div>
    )
}

export default EditEvent;