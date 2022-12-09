import React from "react";
import { Button, Space, Table } from 'antd';
import Search from "antd/es/transfer/search";
import { AudioOutlined } from '@ant-design/icons';
import { DatePicker } from "antd";
import Column from "antd/es/table/Column";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom"


const { RangePicker } = DatePicker
const data = [
    {
        key: '1',
        idx: 1,
        name: 'John Brown',
        age: 32,
        eventType: 'Concert',
    },
    {
        key: '2',
        idx: 2,
        name: 'Jim Green',
        age: 42,
        eventType: 'Trianning',
    },
    {
        key: '3',
        idx: 3,
        name: 'Joe Black',
        age: 32,
        eventType: 'Football',
    },
    {
        key: '4',
        idx: 4,
        name: 'Jim Red',
        age: 32,
        eventType: 'Concert',
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const Event = () => {
    return (
        <>
            <div className="w-full">
                <div className="my-4 flex bg-white p-4 ">
                    <div className="flex w-1/2 justify-start items-center">
                        <h2 className="text-xl font-bold">Event Lists</h2>
                    </div>
                    <div className="flex w-1/2 justify-end items-center">
                        <Link to={`/event/create`}>
                            <Button size={`large`} className="bg-primary text-white">
                                Create Event
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white p-4">
                    {/* <div className="my-4 flex justify-end">
                        <Space>
                            <Search placeholder="Search Event...." enterButton suffix={suffix} />
                            <RangePicker />
                        </Space>


                    </div> */}
                    <div className="">
                        <div className="mb-4 ">
                            <Space>
                                <Button type="" className="bg-blue-700 text-white">All Event</Button>
                                <Button className="">Upcoming</Button>
                                <Button className="">Past Event</Button>
                                <Button className="">Draft</Button>
                                <Search placeholder="Search Event...." enterButton suffix={suffix} />
                                <RangePicker />
                            </Space>
                        </div>
                        <Table bordered size={"small"} dataSource={data} onChange={onChange}>
                            <Column
                                title="Id"
                                key="idx"
                                dataIndex={'idx'}
                                align="center"
                                width={80}
                            />
                            <Column
                                title="Event name"
                                key="event"
                                dataIndex={'name'}
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
                                dataIndex={'eventType'}
                                width={200}
                            />
                            <Column
                                title="Price"
                                key="price"
                                width={120}
                                align="center"
                                render={(_, record) => (
                                    <span className="font-bold text-red-700">
                                        $10.00
                                    </span>
                                )}
                            />
                            <Column
                                title="Action"
                                key="action"
                                width={120}
                                render={(_, record) => (
                                    <Space size="small">
                                        <Link to={`/event/:id`}>
                                            <Button className="bg-yellow-400">
                                                <BiEdit className="text-white" />
                                            </Button>
                                        </Link>
                                        <Button danger>
                                            <BiTrash />
                                        </Button>
                                    </Space>
                                )}
                            />
                        </Table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Event;