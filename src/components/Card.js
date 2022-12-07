import React from "react";
import Chart from "./Chart";


const Card = () => {
    return (
        <>
            <div className="w-full">
                <div className="md:flex grid grid-cols-1 gap-4">
                    <div className="md:flex md:w-1/4">
                        <div className="w-full bg-white rounded-lg shadow-lg p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs"> Traffic</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">334,100</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <svg t="1670313684521" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1570" width="32" height="32"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" p-id="1571" fill="#dbdbdb"></path><path d="M288 712h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zM440 712h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zM592 712h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zM744 712h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z" p-id="1572" fill="#e6e6e6"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 2,99% </span>
                                <span className="whitespace-nowrap"> Since last month </span></p>
                        </div>

                    </div>

                    <div className="md:flex md:w-1/4">
                        <div className="w-full bg-white rounded-lg shadow-lg p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">New users</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">2,999</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                        <svg t="1670313810085" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3713" width="32" height="32"><path d="M864 518H506V160c0-4.4-3.6-8-8-8h-26c-54 0-106.4 10.6-155.7 31.4-47.6 20.1-90.4 49-127.1 85.7-36.7 36.7-65.6 79.5-85.7 127.1C82.6 445.6 72 498 72 552c0 54 10.6 106.4 31.4 155.7 20.1 47.6 49 90.4 85.7 127.1 36.7 36.7 79.5 65.6 127.1 85.7C365.6 941.4 418 952 472 952c54 0 106.4-10.6 155.7-31.4 47.6-20.1 90.4-49 127.1-85.7 36.7-36.7 65.6-79.5 85.7-127.1C861.4 658.4 872 606 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8c-62.6 62.1-147.1 96.6-235.3 96.2-88.1-0.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8z" p-id="3714" fill="#e6e6e6"></path><path d="M952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6-65.8-65.7-152.8-106.5-245.2-115L560.7 72c-4.7-0.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6z m-332.2-58.2V147.6c62.6 13.1 120.7 44.2 166.4 89.8 45.7 45.6 77 103.6 90 166.1l-256.4 0.7z" p-id="3715" fill="#e6e6e6"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                                <span className="whitespace-nowrap"> Since last week </span></p>
                        </div>

                    </div>

                    <div className="md:flex md:w-1/4">

                        <div className="w-full bg-white p-4 rounded-lg shadow-lg">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Sales</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">901</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-blue-500">
                                        <svg t="1670313869231" class="icon" viewBox="0 0 1344 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4963" width="32" height="32"><path d="M754.036365 493.381818C847.12727 456.145455 912.290912 363.054545 912.290912 260.654545 912.290912 111.709091 791.27273 0 651.636365 0 512 0 390.981818 111.709091 390.981818 260.654545 390.981818 363.054545 456.145455 456.145455 549.236364 493.381818 344.436364 539.927273 195.490909 716.8 195.490909 930.909088L195.490909 1005.381818C195.490909 1014.690912 204.8 1024 214.109091 1024L1098.47273 1024C1107.781818 1024 1117.090912 1014.690912 1117.090912 1005.381818L1117.090912 930.909088C1107.781818 716.8 958.836365 539.927273 754.036365 493.381818L754.036365 493.381818ZM456.145455 260.654545C456.145455 148.945455 549.236364 65.163636 651.636365 65.163636 754.036365 65.163636 847.12727 148.945455 847.12727 260.654545 847.12727 372.363636 763.345453 456.145455 651.636365 456.145455 539.927273 456.145455 456.145455 363.054545 456.145455 260.654545L456.145455 260.654545ZM1042.618182 958.836365 260.654545 958.836365 260.654545 930.909088C260.654545 716.8 437.527273 539.927273 651.636365 539.927273 865.745453 539.927273 1042.618182 716.8 1042.618182 930.909088L1042.618182 958.836365 1042.618182 958.836365ZM260.654545 539.927273C344.436364 530.618182 335.127273 465.454545 297.890909 446.836364 242.036364 418.909091 204.8 372.363636 204.8 307.2 204.8 232.727273 260.654545 167.563636 325.818182 167.563636 363.054545 148.945455 344.436364 102.4 325.818182 102.4 223.418182 102.4 148.945455 195.490909 148.945455 297.890909 148.945455 372.363636 186.181818 437.527273 242.036364 465.454545 102.4 502.690909 0 633.018182 0 791.27273 0 819.2 0 856.436365 9.309091 884.363635 27.927273 912.290912 65.163636 893.67273 74.472727 865.745453 65.163636 837.818182 65.163636 819.2 65.163636 791.27273 65.163636 651.636365 158.254545 539.927273 260.654545 539.927273L260.654545 539.927273ZM1070.545453 484.072727C1126.4 446.836364 1163.636365 381.672727 1163.636365 316.509091 1163.636365 204.8 1079.854547 121.018182 986.763635 121.018182 968.145453 121.018182 949.52727 167.563636 986.763635 186.181818 1051.92727 186.181818 1107.781818 251.345455 1107.781818 325.818182 1107.781818 390.981818 1070.545453 437.527273 1014.690912 465.454545 968.145453 484.072727 958.836365 549.236364 1042.618182 549.236364 1154.32727 549.236364 1247.418182 670.254547 1247.418182 800.581818 1247.418182 828.509088 1247.418182 856.436365 1238.109088 875.054547 1247.418182 902.981818 1284.654547 921.6 1303.27273 893.67273 1312.581818 865.745453 1312.581818 828.509088 1312.581818 800.581818 1303.27273 633.018182 1200.87273 502.690909 1070.545453 484.072727L1070.545453 484.072727Z" p-id="4964" fill="#e6e6e6"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 1,25% </span>
                                <span className="whitespace-nowrap"> Since yesterday </span></p>
                        </div>

                    </div>


                    <div className="md:flex md:w-1/4">

                        <div className="w-full bg-white p-4 rounded-lg shadow-lg">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Performance</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">51.02% </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                    <svg t="1670314013455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6011" width="32" height="32"><path d="M855.7 210.8l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L168.3 801.9c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1 0.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144z m0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zM720 576c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144z m0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z" p-id="6012" fill="#e6e6e6"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 12% </span>
                                <span className="whitespace-nowrap"> Since last mounth </span></p>
                        </div>
                    </div>

                </div>
                <Chart/>
            </div>
        </>
    )
}


export default Card;