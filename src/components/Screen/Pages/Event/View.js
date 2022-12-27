import React,{useEffect, useState} from "react";
import { Space, Table } from "antd";
import { FiDollarSign } from "react-icons/fi";
import Column from "antd/es/table/Column";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

export const ViewEvent = () => {

    const [event, setEvent] = useState({});
    const paramID = useParams();
    // console.log("param",paramID);
    const [loading, setLoading] = useState(false)
    const getEvents = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://dummyjson.com/products/${paramID.id}`);
            const data = await respone.json();
            setEvent(data)
            console.log("hello data",data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(()=>{
        getEvents();
    },{});

    if(loading){
        return <Loading/>
    }

    return (
        <div className="w-full  pb-12">
            <div className="flex gap-6">
                <div className="flex-block w-1/4">
                    <div className="w-full bg-white rounded-lg shadow-sm p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Available Ticket</h5>
                                <span className="font-semibold text-xl text-blueGray-700">334 Left</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm rounded-full  bg-red-500">
                                    <svg t="1671691502543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13567" width="32" height="32"><path d="M85.971024 102.704127 85.971024 102.704127c-12.929474 0-23.415292 10.491958-23.414269 23.416316 0 12.929474 10.485819 23.415292 23.414269 23.415292l0 0.024559c0.865717 0.045025 1.689479 0.25685 2.554172 0.25685l63.323211 0 69.77925 577.790402c-30.463826 18.47784-51.000558 51.610448-51.000558 89.830935 0 58.168818 47.209208 105.378026 105.383142 105.378026 45.871747 0 84.584444-29.507034 98.986455-70.464865l6.391571-23.205515 257.597893 0 6.391571 23.205515c14.47262 40.957831 53.089126 70.464865 98.986455 70.464865 58.193377 0 105.383142-47.209208 105.383142-105.378026s-47.189765-105.382119-105.383142-105.382119c-45.732577 0-84.304058 29.319769-98.870822 70.042239L375.09084 782.098601c-13.115716-36.390815-45.597501-63.365166-85.126796-68.680219l-3.0208-24.989137 410.445046 0c2.879584 0.23536 8.919137 0.209778 11.848862 0.209778 56.274678 0 103.2035-39.692001 114.443495-92.619444 0.211824-0.538259 0.652869-1.050935 0.819668-1.638313l82.689281-327.403748 24.375154 0c2.366907 0 4.523013 0.236384 6.743588 0.398066l3.025916-1.261737c10.818393-2.065032 19.129686-11.149944 19.129686-22.551622 0-12.929474-10.491958-23.420409-23.415292-23.420409-0.819668 0-1.503237 0.402159-2.295276 0.470721-1.075495-0.118704-2.085498-0.470721-3.186576-0.470721l-724.664517 0L194.112999 114.387213c-0.089028-0.397043-0.397043-0.633427-0.487094-1.004887-0.774643-18.7132-15.951297-10.32516-34.848693-10.32516l-70.254064 0c-0.376577 0-0.679475-0.050142-1.029446-0.050142C86.97591 102.985536 86.507236 102.704127 85.971024 102.704127M744.362138 876.054483 744.362138 876.054483c-32.340569 0-58.540278-26.205848-58.540278-58.545394 0-32.340569 26.199709-58.545394 58.540278-58.545394 32.339546 0 58.546418 26.203802 58.546418 58.545394C802.908556 849.849658 776.701684 876.054483 744.362138 876.054483M217.463824 817.510112 217.463824 817.510112c0-32.340569 26.203802-58.545394 58.545394-58.545394 32.339546 0 58.540278 26.203802 58.540278 58.545394 0 32.339546-26.200732 58.545394-58.540278 58.545394C243.668649 876.054483 217.463824 849.849658 217.463824 817.510112M254.999718 641.662105 254.999718 641.662105l-39.596833-374.683565 642.396839 0-41.706891 187.555653-34.496675 134.652769c-2.009773 23.998577-24.422226 52.685943-48.942689 52.685943L568.731072 641.872906l0-0.211824L254.999718 641.661082M254.999718 641.662105 254.999718 641.662105z" p-id="13568" fill="#e6e6e6"></path></svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 2,99% </span>
                            <span className="whitespace-nowrap"> Since last month </span></p>
                    </div>

                    <div className="w-full bg-white rounded-lg shadow-sm p-4 mt-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Revenue</h5>
                                <span className="font-semibold text-xl text-blueGray-700">$2,999</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm rounded-full  bg-pink-500">
                                    <svg t="1671691370107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12404" width="32" height="32"><path d="M512 981.333333C253.013333 981.333333 42.666667 770.986667 42.666667 512S253.013333 42.666667 512 42.666667s469.333333 210.346667 469.333333 469.333333-210.346667 469.333333-469.333333 469.333333z m0-844.501333A375.125333 375.125333 0 0 0 136.832 512 375.125333 375.125333 0 0 0 512 887.168 375.125333 375.125333 0 0 0 887.168 512 375.125333 375.125333 0 0 0 512 136.832z" fill="#ffffff" p-id="12405"></path><path d="M711.338667 695.637333a52.906667 52.906667 0 0 1-26.666667-7.850666l-199.338667-136.533334a49.066667 49.066667 0 0 1-20.437333-39.253333V226.304c0-26.666667 20.437333-47.061333 47.104-47.061333 26.666667 0 47.104 20.394667 47.104 47.061333v260.565333l178.944 122.453334c21.973333 14.122667 26.666667 43.946667 12.544 65.92-9.386667 14.122667-23.552 20.394667-39.253333 20.394666z" fill="#ffffff" p-id="12406"></path></svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                            <span className="whitespace-nowrap"> Since last week </span></p>
                    </div>

                    <div className="w-full bg-white rounded-lg shadow-sm p-4 mt-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Ticket Ordered

                                </h5>
                                <span className="font-semibold text-xl text-blueGray-700">2,999 Pcs</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm rounded-full  bg-pink-500">
                                    <svg t="1671691370107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12404" width="32" height="32"><path d="M512 981.333333C253.013333 981.333333 42.666667 770.986667 42.666667 512S253.013333 42.666667 512 42.666667s469.333333 210.346667 469.333333 469.333333-210.346667 469.333333-469.333333 469.333333z m0-844.501333A375.125333 375.125333 0 0 0 136.832 512 375.125333 375.125333 0 0 0 512 887.168 375.125333 375.125333 0 0 0 887.168 512 375.125333 375.125333 0 0 0 512 136.832z" fill="#ffffff" p-id="12405"></path><path d="M711.338667 695.637333a52.906667 52.906667 0 0 1-26.666667-7.850666l-199.338667-136.533334a49.066667 49.066667 0 0 1-20.437333-39.253333V226.304c0-26.666667 20.437333-47.061333 47.104-47.061333 26.666667 0 47.104 20.394667 47.104 47.061333v260.565333l178.944 122.453334c21.973333 14.122667 26.666667 43.946667 12.544 65.92-9.386667 14.122667-23.552 20.394667-39.253333 20.394666z" fill="#ffffff" p-id="12406"></path></svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                            <span className="whitespace-nowrap"> Since last week </span></p>
                    </div>

                    <div className="w-full bg-white rounded-lg shadow-sm p-4 mt-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">Ticket Refunded</h5>
                                <span className="font-semibold text-xl text-blueGray-700">2,999</span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-sm rounded-full  bg-pink-500">
                                    <svg t="1671691370107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12404" width="32" height="32"><path d="M512 981.333333C253.013333 981.333333 42.666667 770.986667 42.666667 512S253.013333 42.666667 512 42.666667s469.333333 210.346667 469.333333 469.333333-210.346667 469.333333-469.333333 469.333333z m0-844.501333A375.125333 375.125333 0 0 0 136.832 512 375.125333 375.125333 0 0 0 512 887.168 375.125333 375.125333 0 0 0 887.168 512 375.125333 375.125333 0 0 0 512 136.832z" fill="#ffffff" p-id="12405"></path><path d="M711.338667 695.637333a52.906667 52.906667 0 0 1-26.666667-7.850666l-199.338667-136.533334a49.066667 49.066667 0 0 1-20.437333-39.253333V226.304c0-26.666667 20.437333-47.061333 47.104-47.061333 26.666667 0 47.104 20.394667 47.104 47.061333v260.565333l178.944 122.453334c21.973333 14.122667 26.666667 43.946667 12.544 65.92-9.386667 14.122667-23.552 20.394667-39.253333 20.394666z" fill="#ffffff" p-id="12406"></path></svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                            <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                            <span className="whitespace-nowrap"> Since last week </span></p>
                    </div>

                </div>
                <div className="flex w-3/4">
                    <div class="w-full ">
                        <div className="overflow-hidden ">
                            <img class="w-full object-contain" src={event.thumbnail} alt="Sunset in the mountains" />
                            <div class="px-6 py-8 bg-white ">
                                <div className="flex gap-4">
                                    <div className="flex w-2/3 justify-start items-center">
                                        <div className="w-full">
                                            <h1 className="text-2xl font-semibold py-3">Event Description</h1>
                                            <div className="content text-gray-400">
                                                <p>
                                                   {event.description}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex w-1/3 justify-end items-center my-auto border-l border-lightGray-700 pl-4">
                                        <div className="w-full">
                                            <div className="flex my-4">
                                                <Space>
                                                    <svg t="1672126775168" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2754" width="32" height="32"><path d="M449.728 891.776a486.208 486.208 0 0 1-55.872-10.688 311.68 311.68 0 0 1-104.384-46.72 233.472 233.472 0 0 1-71.872-81.28c-17.728-32.896-26.24-71.936-25.6-117.184h161.92c0 24.64 4.608 45.568 13.824 62.72 9.216 17.088 21.44 30.976 36.736 41.6 15.232 10.624 33.152 18.56 53.76 23.68 20.608 5.12 41.92 7.68 63.872 7.68 14.912 0 30.912-1.216 48-3.584 16.96-2.368 32.96-7.04 47.872-13.888 14.912-6.848 27.328-16.256 37.248-28.288 9.92-11.968 14.912-27.2 14.912-45.696 0-19.904-6.592-36.032-19.712-48.384a157.184 157.184 0 0 0-51.648-30.784 529.024 529.024 0 0 0-72.384-21.632 2058.688 2058.688 0 0 1-81.984-20.544 747.136 747.136 0 0 1-83.072-25.216 288.512 288.512 0 0 1-72.384-38.528 183.36 183.36 0 0 1-51.648-59.136c-13.12-23.68-19.712-52.224-19.712-85.824 0-37.76 8.32-70.4 24.96-98.176 16.768-27.776 38.592-50.88 65.536-69.44 27.008-18.496 57.536-32.192 91.584-41.088 16.64-4.352 33.344-7.68 50.048-9.92V0h125.184v133.12c14.08 1.92 27.84 4.544 41.472 7.68 36.544 8.64 69.056 22.528 97.408 41.664 28.416 19.2 50.944 43.712 67.648 73.536 16.64 29.824 24.96 65.92 24.96 108.48h-161.792c-1.408-21.952-6.208-40.128-14.4-54.528a92.16 92.16 0 0 0-32.448-33.92 140.224 140.224 0 0 0-46.336-17.472 295.04 295.04 0 0 0-56.96-5.12c-13.504 0-27.008 1.344-40.448 4.096-13.504 2.752-25.792 7.552-36.736 14.4a91.072 91.072 0 0 0-27.2 25.728c-7.04 10.24-10.624 23.296-10.624 39.04 0 14.4 2.816 26.048 8.512 34.944 5.696 8.96 16.832 17.152 33.536 24.704 16.64 7.552 39.744 15.04 69.248 22.592 29.44 7.552 67.968 17.152 115.52 28.8 14.208 2.752 33.92 7.68 59.072 14.912 25.216 7.168 50.24 18.688 75.072 34.432 24.832 15.744 46.336 36.864 64.448 63.232 18.112 26.368 27.136 60.16 27.136 101.248 0 33.6-6.72 64.768-20.224 93.568-13.44 28.8-33.536 53.632-60.16 74.56-26.624 20.864-59.648 37.12-99.008 48.832a420.48 420.48 0 0 1-77.696 14.72V1024H449.728v-132.224z" fill="#2EBAE2" p-id="2755"></path></svg>                                                <div className="">
                                                        <span className="block text-gray-400 ">
                                                            Ticket Price
                                                        </span>
                                                        <span className="block font-nromal py-1">
                                                            ${event.price}
                                                        </span>
                                                    </div>

                                                </Space>
                                            </div>
                                            <div className="flex my-4">
                                                <Space>
                                                    <svg t="1672127640521" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1423" width="32" height="32"><path d="M805.49888 981.49888l-602.3168-0.76288c-86.59456-8.192-154.56768-81.3056-154.56768-170.01472L48.6144 291.73248c0-94.1568 76.60032-170.75712 170.7776-170.75712l586.10176 0c94.1568 0 170.73152 76.60032 170.73152 170.75712L976.22528 810.7008C976.2304 904.87296 899.63008 981.49888 805.49888 981.49888L805.49888 981.49888zM219.3664 190.57152c-55.79776 0-101.20192 45.38368-101.20192 101.18144l0 518.96832c0 55.79776 45.40416 101.20704 101.20192 101.20704l586.13248 0c55.77728 0 101.16096-45.40928 101.16096-101.20704L906.65984 291.73248c0-55.79776-45.38368-101.18656-101.16096-101.18656L219.3664 190.54592 219.3664 190.57152zM698.84416 290.51904c-25.60512 0-46.38208-20.77696-46.38208-46.38208l0-158.6688c0-25.6 20.77696-46.38208 46.38208-46.38208 25.6 0 46.38208 20.78208 46.38208 46.38208L745.22624 244.1216C745.22624 269.7472 724.46976 290.51904 698.84416 290.51904L698.84416 290.51904zM315.65824 290.51904c-25.60512 0-46.38208-20.77696-46.38208-46.38208l0-158.6688c0-25.6 20.77696-46.38208 46.38208-46.38208 25.6 0 46.38208 20.78208 46.38208 46.38208L362.04032 244.1216C362.04032 269.7472 341.28896 290.51904 315.65824 290.51904L315.65824 290.51904zM534.8864 794.78784l-44.27264 0c-25.6 0-46.38208-20.77696-46.38208-46.38208 0-25.6 20.78208-46.38208 46.38208-46.38208l44.27264 0c25.6 0 46.38208 20.78208 46.38208 46.38208C581.26848 774.01088 560.4864 794.78784 534.8864 794.78784L534.8864 794.78784zM930.79552 452.608 121.24672 452.608c-25.60512 0-46.38208-20.78208-46.38208-46.38208 0-25.60512 20.77696-46.38208 46.38208-46.38208l809.5744 0c25.6 0 46.38208 20.77696 46.38208 46.38208C977.2032 431.82592 956.42624 452.608 930.79552 452.608L930.79552 452.608zM327.92576 649.03168l-44.27264 0c-25.6 0-46.38208-20.78208-46.38208-46.38208 0-25.60512 20.78208-46.38208 46.38208-46.38208l44.27264 0c25.6 0 46.38208 20.77696 46.38208 46.38208C374.30784 628.25472 353.52576 649.03168 327.92576 649.03168L327.92576 649.03168zM534.8864 649.03168l-44.27264 0c-25.6 0-46.38208-20.78208-46.38208-46.38208 0-25.60512 20.78208-46.38208 46.38208-46.38208l44.27264 0c25.6 0 46.38208 20.77696 46.38208 46.38208S560.4864 649.03168 534.8864 649.03168L534.8864 649.03168zM741.27872 649.03168l-44.26752 0c-25.60512 0-46.38208-20.78208-46.38208-46.38208 0-25.60512 20.77696-46.38208 46.38208-46.38208l44.26752 0c25.60512 0 46.38208 20.77696 46.38208 46.38208C787.6608 628.25472 766.90944 649.03168 741.27872 649.03168L741.27872 649.03168zM327.92576 794.78784l-44.27264 0c-25.6 0-46.38208-20.77696-46.38208-46.38208 0-25.6 20.78208-46.38208 46.38208-46.38208l44.27264 0c25.6 0 46.38208 20.78208 46.38208 46.38208C374.30784 774.01088 353.52576 794.78784 327.92576 794.78784L327.92576 794.78784zM741.27872 794.78784l-44.26752 0c-25.60512 0-46.38208-20.77696-46.38208-46.38208 0-25.6 20.77696-46.38208 46.38208-46.38208l44.26752 0c25.60512 0 46.38208 20.78208 46.38208 46.38208C787.6608 774.01088 766.90944 794.78784 741.27872 794.78784L741.27872 794.78784z" fill="#2EBAE2" p-id="1424"></path></svg>                                                <div className="">
                                                        <span className="block text-gray-400 ">
                                                            Date
                                                        </span>
                                                        <span className="block font-nromal py-1">
                                                            Sunday,12 june 2020
                                                        </span>
                                                    </div>

                                                </Space>
                                            </div>
                                            <div className="flex my-4">
                                                <Space>
                                                    <svg t="1672127706199" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2907" width="32" height="32"><path d="M474.129 65.929c-153.213 16.689-277.43 138.728-296.656 291.644-9.901 78.748 7.502 152.922 43.861 214.584 71.595 150.11 214.528 316.671 269.5 377.995 11.882 13.255 32.546 13.347 44.428 0.092 57.923-64.616 213.866-246.527 280.641-402.671 21.381-44.289 33.37-93.963 33.37-146.439-0.001-198.748-171.909-357.343-375.144-335.205z m67.511 504.399c-117.27 14.78-215.888-83.842-201.106-201.11 10.072-79.901 74.595-144.422 154.497-154.491 117.266-14.777 215.881 83.839 201.103 201.106-10.07 79.902-74.592 144.425-154.494 154.495z" p-id="2908" fill="#2EBAE2"></path></svg>                                                <div className="">
                                                        <span className="block text-gray-400 ">
                                                            Location
                                                        </span>
                                                        <span className="block font-nromal py-1">
                                                            Blue Corner St.123566 Franklin Avenue,London
                                                        </span>
                                                    </div>

                                                </Space>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-6 bg-white px-6 py-3">
                            <h1 className="text-xl font-semibold py-3">Recent Sales</h1>
                            <Table bordered size={"small"} dataSource={""}>
                                <Column
                                    title="Order ID"
                                    key="idx"
                                    dataIndex={'idx'}
                                    align="center"
                                    width={80}
                                />
                                <Column
                                    title="Date"
                                    key="event"
                                    dataIndex={'name'}
                                />
                                <Column
                                    title="Customer Name"
                                    key="status"
                                    width={250}
                                    align="center"
                                    dataIndex={'qty'}
                                />
                                <Column
                                    title="Location"
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
                                    title="Sold Ticket	"
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
                                    title="Refund"
                                    key="price"
                                    width={120}
                                    align="center"
                                    render={(_, record) => (
                                        <span className="font-bold text-red-700">
                                            $10.00
                                        </span>
                                    )}
                                />
                              
                            </Table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

