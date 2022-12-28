import React, { Fragment, useEffect, useState } from "react";
import { Button, Space, Table, Modal, Form, Steps, TimePicker, message, InputNumber } from 'antd';
import { DatePicker } from "antd";
import Column from "antd/es/table/Column";
import { Link, withRouter } from "react-router-dom"
import { Popover } from "antd";
import Loading from "../Loading";
import { Input, Tooltip } from "antd";
import { FiInfo, FiPlus, FiSave, FiChevronsLeft, FiChevronsRight, FiSend } from "react-icons/fi";
import { Select } from "antd";
import Autocomplete from "react-google-autocomplete";
import dayjs from 'dayjs';
import Dragger from "antd/es/upload/Dragger";
import JoditEditor from "jodit-react";
import { InboxOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker

// const onBlurSearch = () => {
//     console.log("hello world")
// }
const { Step } = Steps;
const format = 'HH:mm';

const contentSearch = (
    <div className="">
        {/* <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-400 dark:bg-gray-400">
            <h3 class="font-semibold text-gray-900 dark:text-white">Search</h3>
        </div> */}
        <div class="px-3 py-2 text-gray-500">
            <Input
                placeholder="Enter your username"
                suffix={
                    <Tooltip title="Search by Event Name">
                        <FiInfo />
                    </Tooltip>
                }
            />
        </div>
        <div className="mt-3 px-3 py-1 bg-lightGray text-white">
            <div className="flex">
                <div className="flex w-1/2 justify-start items-center">
                    <Link>Reset</Link>
                </div>
                <div className="flex w-1/2 justify-end items-center">
                    <Link>
                        <span className="text-gray-400">Apply</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const contentAllEvent = (
    <div className="">
        {/* <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:border-gray-400 dark:bg-gray-400">
            <h3 class="font-semibold text-gray-900 dark:text-white">Search</h3>
        </div> */}
        <div class="px-3 py-2 text-gray-500">
            <Select
                showSearch
                style={{
                    width: 200,
                }}
                placeholder="Search Event Type"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: 'Upcoming',
                    },
                    {
                        value: '2',
                        label: 'Past Event',
                    },
                    {
                        value: '3',
                        label: 'Draft',
                    },
                ]}
            />
        </div>
        <div className="mt-3 px-3 py-1 bg-lightGray text-white">
            <div className="flex">
                <div className="flex w-1/2 justify-start items-center">
                    <Link className="text-gray-400">Reset</Link>
                </div>
                {/* <div className="flex w-1/2 justify-end items-center">
                    <Link>
                        <span className="text-gray-400">Apply</span>
                    </Link>
                </div> */}
            </div>
        </div>
    </div>
);





const Event = (props) => {
    const [current, setCurrent] = useState(0);
    const [eventList, setEvent] = useState([]);
    const [isAddModalOpen, setAddModal] = useState(false);
    const [isUpdateModalOpen, setUpdateModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [eventTitle, setEventTitle] = useState("");
    const [organizer, setOrganizer] = useState("");
    const getEventList = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://dummyjson.com/products`);
            const data = await respone.json();
            setEvent(data.products)
            console.log(data.products)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const onChange = (pagination, filters, sorter, extra) => {
        setLoading(true)
        console.log('params', pagination, filters, sorter, extra);
        setLoading(false)
    };

    const handleCancelAddModal = () => {
        setAddModal(false);
    }
    const isOpenAddModal = () => {
        setAddModal(true);
    }

    const handleCancelUpdateModal = () => {
        setUpdateModal(false);
    }
    const isOpenUpdateModal = () => {
        setUpdateModal(true);
    }

    const next = () => {
        // if (eventTitle && organizer) {
        // alert("helloworld");
        setCurrent(current + 1);
        // }
    };

    const prev = () => {
        setCurrent(current - 1);
    };

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


                        >
                            <Input onChange={(e) => setOrganizer(e.target``.value)} placeholder="Select category" />
                        </Form.Item>

                        <Form.Item
                            label="Sub-Category"
                            name="subCategory"
                            rules={[{ required: true, message: 'Please input sub-category!' }]}


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

                    <div className="md:grid md:grid-cols-2 gap-4">

                        <Form.Item
                            label="Event Starts"
                            name="eventStart"


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

                            >
                                <Input type={'number'} placeholder="Enter ticket qty" className="mx-1 w-full" />
                            </Form.Item>

                            <Form.Item
                                label="Ticket Price"
                                name="price"
                                rules={[{ required: true, message: 'Please input ticket price!' }]}

                            >
                                <InputNumber type={'number'} className="mx-1 w-full" addonAfter="$" defaultValue={0} />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <Form.Item
                                label="Event Starts"
                                name="eventStart"

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

                        </div>
                    </div>
                </div>
            </>
        );
    }


    useEffect(() => {
        // setLoading(true)
        getEventList();
        // setLoading(false)
    }, [])

    const { match } = props;

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Fragment>
                <div className="w-full">
                    <div className="my-4 flex bg-white p-4 ">
                        <div className="flex w-1/2 justify-start items-center">
                            <h2 className="text-sm md:text-xl font-bold">Event Lists</h2>
                        </div>
                        <div className="md:flex w-1/2 justify-end items-center hidden">
                            {/* <Link to={`${match.path}/create`}> */}
                            <Button type="primary" size="large" onClick={isOpenAddModal}>
                                <div className="flex items-center justify-center">
                                    <Space>
                                        <FiPlus className="text-xl" /> Create Event
                                    </Space>
                                </div>
                            </Button>
                            {/* </Link> */}
                        </div>
                        <div className="flex w-1/2 justify-end items-center  md:hidden">
                            {/* <Link to={`${match.path}/create`}> */}
                            <Button type="primary" size="small" onClick={isOpenAddModal}>
                                <div className="flex items-center justify-center">
                                    <Space>
                                        <FiPlus />
                                    </Space>
                                </div>
                            </Button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <div className="">
                            <div className="mb-4 ">
                                <Space>
                                    <Popover placement="bottom" content={contentSearch} trigger="click">
                                        <Button>Search</Button>
                                    </Popover>
                                    <Popover placement="bottom" content={contentAllEvent} trigger="click">
                                        <Button>All Events</Button>
                                    </Popover>
                                    <RangePicker />
                                </Space>
                            </div>
                            <Table bordered size={"small"} dataSource={eventList} onChange={onChange} scroll={{ x: 800 }}>
                                <Column
                                    title="Id"
                                    key="idx"
                                    dataIndex={'id'}
                                    align="center"
                                    width={80}
                                />
                                <Column
                                    title="Event Image"
                                    key="img"
                                    align="center"
                                    width={100}
                                    render={(_, record) => (
                                        <img className="w-12 h-12 object-cover" src={record.thumbnail}></img>
                                    )}
                                />
                                <Column
                                    title="Event name"
                                    key="event"
                                    dataIndex={'title'}
                                />
                                <Column
                                    title="Status"
                                    key="status"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="bg-success-400 text-white rounded-lg px-3 py-0.5">
                                            Pending
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Category"
                                    key="eventType"
                                    dataIndex={'category'}
                                    width={200}
                                />
                                <Column
                                    title="Qty"
                                    key="qty"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="font-bold">
                                            {record.stock}
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Price"
                                    key="price"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="font-bold text-red-700">
                                            ${record.price}
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Created At"
                                    key="createdAt"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="">
                                            22-01-2022
                                        </span>
                                    )}
                                />
                                <Column
                                    title="Action"
                                    key="action"
                                    width={120}
                                    render={(text, record) => (
                                        <>

                                            <div className="inline-flex items-center rounded-md">
                                                {/* <Link to={`${match.path}/${record.id}/edit`}> */}
                                                <button onClick={isOpenUpdateModal} className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                    </span>
                                                </button>
                                                {/* </Link> */}

                                                <Link to={`${match.path}/${record.id}/view`}>
                                                    <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </Link>

                                                <button className=" text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                />
                            </Table>
                        </div>
                    </div>
                </div>
            </Fragment>


            {/* Add Modal Event */}
            <Modal
                title="Add Event"
                open={isAddModalOpen}
                // width={'50%'}
                className="w-ful"
                footer={null}
                onCancel={handleCancelAddModal}
                style={{
                    top: 20,
                }}
            >
                <div>
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{ remember: true }}
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
            </Modal>

            {/* Update Modal Event */}
            <Modal
                title="Update Event"
                open={isUpdateModalOpen}
                // width={'50%'}
                footer={null}
                onCancel={handleCancelUpdateModal}
                className="md:w-1/2 sm:w-full"
                style={{
                    top: 20,
                  }}
            >
                <div>
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{ remember: true }}
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
            </Modal>
        </>
    )
}

export default withRouter(Event);