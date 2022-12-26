import React, { Fragment, useState } from "react";
import Input from "antd/es/input/Input";
import { DatePicker } from "antd";
import { TimePicker, Button, Steps, Form } from "antd";
import dayjs from 'dayjs';
import { Space } from "antd";
import 'draft-js/dist/Draft.css';
import JoditEditor from "jodit-react";
import { InboxOutlined } from '@ant-design/icons';
import Dragger from "antd/es/upload/Dragger";
import { message } from "antd";
import Autocomplete from "react-google-autocomplete";
import { withRouter } from "react-router";

const CreateEvent = () => {
    const format = 'HH:mm';
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const { Step } = Steps;

    const [eventTitle, setEventTitle] = useState("");
    const [organizer, setOrganizer] = useState("");


    function FirstContent() {
        return (
            <>
                <div className="">
                    <Form.Item
                        label="Event Title"
                        name="eventTitle"
                        rules={[{ required: true, message: 'Please input your event title!' }]}
                    >
                        <Input onChange={(e) => setEventTitle(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Organizer"
                        name="organizer"
                        rules={[{ required: true, message: 'Please input organizer!' }]}
                    >
                        <Input onChange={(e) => setOrganizer(e.target.value)} />
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={[{ required: true, message: 'Please input category!' }]}
                            labelCol={{ span: 8 }}

                        >
                            <Input onChange={(e) => setOrganizer(e.target``.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Sub-Category"
                            name="subCategory"
                            rules={[{ required: true, message: 'Please input sub-category!' }]}
                            labelCol={{ span: 8 }}

                        >
                            <Input onChange={(e) => setOrganizer(e.target.value)} className="w-72 ml-2" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[{ required: true, message: 'Please input location!' }]}
                    >
                        <Autocomplete
                            className="w-full p-1 rounded-md border border-lightGray-700"
                            apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                            onPlaceSelected={(place) => {
                                console.log(place);
                            }}
                        />
                    </Form.Item>

                    {/* <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            label="Event Starts"
                            name="eventStart"
                            rules={[{ required: true, message: 'Please input event start!' }]}
                            labelCol={{ span: 8 }}
                        >
                            <Input onChange={(e) => setOrganizer(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Event Ends"
                            name="eventEnd"
                            rules={[{ required: true, message: 'Please input event end!' }]}
                            labelCol={{ span: 8 }}
                        >
                            <Input onChange={(e) => setOrganizer(e.target.value)}  />
                        </Form.Item>
                    </div> */}

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            label="Event Starts"
                            name="eventStart"
                            rules={[{ required: true, message: 'Please input category!' }]}
                            labelCol={{ span: 8 }}

                        >
                            <Input onChange={(e) => setOrganizer(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Event Ends"
                            name="eventEnd"
                            rules={[{ required: true, message: 'Please input sub-category!' }]}
                            labelCol={{ span: 8 }}
                            
                        >
                            <Input onChange={(e) => setOrganizer(e.target.value)} className="w-72 ml-2" />
                        </Form.Item>
                    </div>

                </div>
            </>
        );
    }

    function SecondContent() {
        return (
            <>
                <h1>Step2</h1>
            </>
        );
    }

    function ThirdContent() {
        return (
            <>
                <h1>Step3</h1>
            </>
        );
    }

    const steps = [
        {
            title: "Base Info",
            content: <FirstContent />
        },
        {
            title: "Second",
            content: <SecondContent />
        },
        {
            title: "Last",
            content: <ThirdContent />
        }
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        if (eventTitle) {
            // alert("helloworld");
            setCurrent(current + 1);
        }
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    return (

        <>
            <Fragment>
                <div className="w-full">
                    <div className="my-4 flex bg-white p-4">
                        <h2 className="text-xl font-bold">Create Event</h2>
                    </div>
                    <div className="w-full bg-white p-4">
                        <div className="max-w-4xl mx-auto">
                            <Form
                                name="basic"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 32 }}
                                initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            // autoComplete="off"
                            >
                                <Steps current={current}>
                                    {steps.map((item) => (
                                        <Step key={item.title} title={item.title} className="my-4" />
                                    ))}
                                </Steps>
                                <div className="steps-content">{steps[current].content}</div>
                                <div className="steps-action flex justify-end">
                                    {current < steps.length - 1 && (
                                        <Button type="primary" onClick={() => next()} htmlType="submit">
                                            Next
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button
                                            type="primary"
                                            onClick={() => message.success("Processing complete!")}
                                        >
                                            Done
                                        </Button>
                                    )}
                                    {current > 0 && (
                                        <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                                            Previous
                                        </Button>
                                    )}
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    )
}

export default CreateEvent;