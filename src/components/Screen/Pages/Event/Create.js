import React, { Fragment, useState } from "react";
import Input from "antd/es/input/Input";
import { TimePicker, Button, Steps, Form, DatePicker, InputNumber } from "antd";
import dayjs from 'dayjs';
import { Space } from "antd";
import 'draft-js/dist/Draft.css';
import JoditEditor from "jodit-react";
import { InboxOutlined } from '@ant-design/icons';
import Dragger from "antd/es/upload/Dragger";
import { message } from "antd";
import Autocomplete from "react-google-autocomplete";
import { withRouter } from "react-router";
import { FiChevronsLeft, FiChevronsRight, FiSend } from "react-icons/fi";

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
                        <Input onChange={(e) => setEventTitle(e.target.value)} placeholder="Enter event title" />
                    </Form.Item>

                    <Form.Item
                        label="Organizer"
                        name="organizer"
                        rules={[{ required: true, message: 'Please input organizer!' }]}
                    >
                        <Input onChange={(e) => setOrganizer(e.target.value)} placeholder="Enter organizer name" />
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={[{ required: true, message: 'Please input category!' }]}
                            labelCol={{ span: 8 }}

                        >
                            <Input onChange={(e) => setOrganizer(e.target``.value)} placeholder="Select category" />
                        </Form.Item>

                        <Form.Item
                            label="Sub-Category"
                            name="subCategory"
                            rules={[{ required: true, message: 'Please input sub-category!' }]}
                            labelCol={{ span: 8 }}

                        >
                            <Input onChange={(e) => setOrganizer(e.target.value)} placeholder="Selecte sub-category" />
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

                    <div className="grid grid-cols-2 gap-4">

                        <Form.Item
                            label="Event Starts"
                            name="eventStart"
                            labelCol={{ span: 8 }}
                            
                        >
                            <Input.Group compact>
                                <Form.Item
                                    name={['datePicker', 'date']}
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Date is required',
                                        },
                                    ]}
                                >
                                    <DatePicker className="w-7/12" />
                                </Form.Item>
                                <Form.Item
                                    name={['datePicker', 'time']}
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Time is required',
                                        },
                                    ]}
                                >
                                    <TimePicker className="w-5/12" defaultValue={dayjs('12:08', format)} format={format} />
                                </Form.Item>
                            </Input.Group>
                        </Form.Item>

                        <Form.Item
                            label="Event Ends"
                            name="eventEnd"
                            labelCol={{ span: 8 }}
               

                        >
                            <Input.Group compact>
                                <Form.Item
                                    name={['datePicker', 'date']}
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Date is required',
                                        },
                                    ]}
                                    labelCol={{ span: 8 }}
                                >
                                    <DatePicker className="w-7/12" />
                                </Form.Item>
                                <Form.Item
                                    name={['datePicker', 'time']}
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Time is required',
                                        },
                                    ]}
                                >
                                    <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
                                </Form.Item>
                            </Input.Group>
                        </Form.Item>

                    </div>

                </div>
            </>
        );
    }

    function SecondContent() {
        return (
            <>
                <div className="w-full">
                    <div className="my-3">
                        <h3 for="full-name" className="leading-7 text-sm text-gray-600">Main Image</h3>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Upload a file or drag and drop</p>
                            <p className="ant-upload-hint">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </Dragger>
                    </div>
                    <div className="my-3">
                        <h3 for="full-name" className="leading-7 text-sm text-gray-600">Description</h3>
                        <JoditEditor />
                    </div>
                </div>
            </>
        );
    }

    function ThirdContent() {
        return (
            <>
                <div className="w-full">
                    <div className="my-3">
                        <Form.Item
                            label="Ticket Name"
                            name="ticketName"
                            rules={[{ required: true, message: 'Please input your ticket name!' }]}
                        >
                            <Input onChange={(e) => setEventTitle(e.target.value)} placeholder="Enter event ticket name" />
                        </Form.Item>
                        <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                                label="Ticket Qty"
                                name="qty"
                                rules={[{ required: true, message: 'Please input ticket qty!' }]}
                                labelCol={{ span: 8 }}

                            >
                                <Input type={'number'} placeholder="Enter ticket qty" className="mx-1 w-full" />
                            </Form.Item>

                            <Form.Item
                                label="Ticket Price"
                                name="price"
                                rules={[{ required: true, message: 'Please input ticket price!' }]}
                                labelCol={{ span: 8 }}

                            >
                                <InputNumber type={'number'} className="mx-1 w-full" addonAfter="$" defaultValue={0} />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <Form.Item
                                label="Event Starts"
                                name="eventStart"
                                labelCol={{ span: 8 }}
                                
                            >
                                <Input.Group compact>
                                    <Form.Item
                                        name={['datePicker', 'date']}
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Date is required',
                                            },
                                        ]}
                                    >
                                        <DatePicker className="w-7/12" />
                                    </Form.Item>
                                    <Form.Item
                                        name={['datePicker', 'time']}
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Time is required',
                                            },
                                        ]}
                                    >
                                        <TimePicker className="w-5/12" defaultValue={dayjs('12:08', format)} format={format} />
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>

                            <Form.Item
                                label="Event Ends"
                                name="eventEnd"
                                labelCol={{ span: 8 }}
                   

                            >
                                <Input.Group compact>
                                    <Form.Item
                                        name={['datePicker', 'date']}
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Date is required',
                                            },
                                        ]}
                                        labelCol={{ span: 8 }}
                                    >
                                        <DatePicker className="w-7/12" />
                                    </Form.Item>
                                    <Form.Item
                                        name={['datePicker', 'time']}
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Time is required',
                                            },
                                        ]}
                                    >
                                        <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>

                        </div>
                    </div>
                </div>
            </>
        );
    }

    const steps = [
        {
            title: "Base Info",
            content: <FirstContent />
        },
        {
            title: "Description",
            content: <SecondContent />
        },
        {
            title: "Ticket",
            content: <ThirdContent />
        }
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        // if (eventTitle && organizer) {
        // alert("helloworld");
        setCurrent(current + 1);
        // }
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
                                <div className="steps-action flex justify-end mb-3 mt-8">
                                    {current > 0 && (
                                        <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                                            <div className="flex">
                                                <Space>
                                                    <FiChevronsLeft /> Cancel
                                                </Space>
                                            </div>
                                        </Button>
                                    )}
                                    {current < steps.length - 1 && (
                                        <Button type="primary" onClick={() => next()} htmlType="submit">
                                            <div className="flex">
                                                <Space>
                                                    Next <FiChevronsRight />
                                                </Space>
                                            </div>
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button
                                            type="primary"
                                            onClick={() => message.success("Processing complete!")}
                                        >
                                            <div className="flex">
                                                <Space>
                                                    <FiSend /> Public
                                                </Space>
                                            </div>
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