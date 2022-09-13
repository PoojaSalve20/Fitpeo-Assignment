import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';

import { BarChart, Bar, PieChart, Pie, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {


    const data = [
        {
            name: 'Feb',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Mar',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Apr',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'May',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Jun',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jul',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data2 = [
        {
            name: 'Mon',
            Current: 4000,
            Previous: 2400,
            amt: 2400,
        },
        {
            name: 'Tue',
            Current: 3000,
            Previous: 1398,
            amt: 2210,
        },
        {
            name: 'Wed',
            Current: 2000,
            Previous: 9800,
            amt: 2290,
        },
        {
            name: 'Thu',
            Current: 2780,
            Previous: 3908,
            amt: 2000,
        },
        {
            name: 'Fri',
            Current: 1890,
            Previous: 4800,
            amt: 2181,
        },
        {
            name: 'Sat',
            Current: 2390,
            Previous: 3800,
            amt: 2500,
        },

    ];





    const data1 = [
        { name: 'Group A', value: 70 },
        { name: 'Group B', value: 25 },
        { name: 'Group C', value: 19 }
    ];
    const COLORS = ["#3b76e1", "#f56e6e", "#D3D3D3"];

    return (

        <div className="dashboard">
            <Sidenav />
            <div class="right-side">
                <Header />
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-xxl-9'>
                            <div className='row'>
                                <div className='col-lg-6 col-xl-4'>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pie-chart mt-5" viewBox="0 0 16 16">
                                                    <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                                </svg>
                                            </div>
                                            <div className='col-6'>
                                                <p className='para-text mt-3'>Revenue</p>
                                                <p className=' fs-5'>$21,456</p>
                                            </div>
                                            <div className='col-4'>
                                                <p className='text-success discount-text'>+ 2.65%</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-xl-4'>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag mt-5" viewBox="0 0 16 16">
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                </svg>
                                            </div>
                                            <div className='col-6'>
                                                <p className='para-text mt-3'>Orders</p>
                                                <p className=' fs-5'>$21,456</p>
                                            </div>
                                            <div className='col-4'>
                                                <p className='text-danger  discount-text1'>+ 2.65%</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-xl-4'>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='col-2 '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people mt-5" viewBox="0 0 16 16">
                                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                                </svg>
                                            </div>
                                            <div className='col-6'>
                                                <p className='para-text mt-3'>Customers</p>
                                                <p className=' fs-5'>$21,456</p>
                                            </div>
                                            <div className='col-4'>
                                                <p className='text-success  discount-text'>+ 2.65%</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='container-fluid corner mt-5 bg-white shadow'>
                    <div className='row '>
                        <div className='col-xxl-9'>
                            <div className='row'>
                                <div className='col-lg-6 col-xl-4'>
                                    <p className='p-4 fw-bold'>Overview</p>
                                    <div className='section-one'>
                                        <p className=''> This Month</p>
                                        <div className='d-flex'>
                                            <p className='fw-bold fs-5'>$21,456</p>
                                            <p className='text-success text-count'>+ 2.65%</p>
                                        </div>

                                    </div>
                                    <div className='row border-bottom  p-3'>
                                        <div className='col-3 border-right'>
                                            <p className='para-text '>Orders</p>
                                            <p className='fw-bold'>5,643</p>
                                        </div>
                                        <div className='col-3 ml'>
                                            <p className='para-text '>Sales</p>
                                            <p className='fw-bold'>16,273</p>
                                        </div>
                                    </div>
                                    <div className='row border-bottom p-3'>
                                        <div className='col-4 '>
                                            <p className='para-text'>Order Value</p>
                                            <p className='fw-bold'>12.03%</p>
                                        </div>
                                        <div className='col-3'>
                                            <p className='para-text'>Customers</p>
                                            <p className='fw-bold'>21,456</p>
                                        </div>
                                    </div>
                                    <div className='row border-bottom p-3'>
                                        <div className='col-3'>
                                            <p className='para-text'>Income</p>
                                            <p className='fw-bold'>$35,652</p>
                                        </div>
                                        <div className='col-3 ml'>
                                            <p className='para-text'>Expenses</p>
                                            <p className='fw-bold'>$12,248</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-xl-5'>
                                    <p className='text-end mt-3'><strong>Sort by :</strong><span>Yearly</span></p>

                                    <ResponsiveContainer width="100%" height="80%">
                                        <BarChart
                                            width={500}
                                            height={100}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 10,
                                                left: 40,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fill="	#D3D3D3" />
                                            <Bar dataKey="uv" fill="#3b76e1" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-xxl-9'>
                            <div className='row'>
                                <div className='col-lg-6 col-xl-4'>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='d-flex mt-3'>
                                                <p className='text-start fw-bold'>User Activity</p>
                                                <p className='text-end mx-auto para-text'>Weekly</p>

                                            </div>
                                            <div className='section-one'>
                                                <p className='para-text'> This Month</p>
                                                <p className='fw-bold fs-6'>16,543</p>
                                                <ResponsiveContainer width="100%" height="82%">
                                                    <LineChart
                                                        width={500}
                                                        height={300}
                                                        data={data2}
                                                        margin={{
                                                            top: 5,
                                                            right: 50,
                                                            left: -10,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Line type="monotone" dataKey="Previous" stroke="#f56e6e" activeDot={{ r: 8 }} />
                                                        <Line type="monotone" dataKey="Current" stroke="#3b76e1" />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-6 col-xl-4'>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='d-flex mt-3'>
                                                <p className='text-start fw-bold'>Order Status</p>
                                                <p className='text-end mx-auto para-text'>...</p>
                                            </div>

                                            <div className='section-one '>
                                                <p className='para-text'> This Month</p>
                                                <p className='fw-bold fs-6'>16,543</p>
                                                <PieChart width={240} height={310} style={{ marginTop: "-50px" }}>
                                                    <Pie
                                                        data={data1}
                                                        cx={120}
                                                        cy={200}
                                                        innerRadius={80}
                                                        outerRadius={100}
                                                        fill="#8884d8"
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                    >
                                                        {data.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                </PieChart>
                                            </div>

                                        </div>

                                        <div className='row mt-2 '>
                                            <div className='col-4'>
                                                <p className='para-text'>Completed</p>
                                                <p className='text-center fw-bold'>70</p>
                                            </div>
                                            <div className='col-4'>
                                                <p className='para-text' style={{ marginLeft: "20px" }} >Pending</p>
                                                <p className='text-center fw-bold'>25</p>
                                            </div>
                                            <div className='col-4'>
                                                <p className='para-text' style={{ marginLeft: "20px" }} >Cancel</p>
                                                <p className='text-center fw-bold'>19</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-xl-4'>
                                    <div className='card'>
                                        <div className='row'>
                                            <div className='d-flex mt-3'>
                                                <p className='text-start fw-bold'>Top Product</p>
                                                <p className='text-end mx-auto para-text end-text'>Monthly</p>
                                            </div>
                                            <div className='section-one'>
                                                <p className='para-text'> This Month</p>
                                                <p className='fw-bold fs-6'>16,543</p>

                                            </div>

                                        </div>
                                        <ul class="list-unstyled mb-0">
                                            <li class="px-4 py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div class="avatar-title bg-primary bg-gradient p-1 rounded">#1</div>
                                                        </div></div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <p class="text-muted mb-1 text-truncate">Polo blue T-shirt</p>
                                                        <div class="fw-semibold font-size-15">$ 25.4</div>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <h5 class="fs-6 mb-0 text-truncate w-xs bg-light p-2 rounded-pill text-center">3.82k</h5>
                                                    </div></div></li><li class="px-4 py-3"><div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-3"><div class="avatar-sm">
                                                            <div class="avatar-title bg-primary bg-gradient rounded p-1">#2</div>
                                                        </div></div><div class="flex-grow-1 overflow-hidden">
                                                            <p class="text-muted mb-1 text-truncate">Hoodie for men</p>
                                                            <div class="fw-semibold font-size-15">$ 24.5</div>
                                                        </div><div class="flex-shrink-0">
                                                            <h5 class="fs-6 mb-0 text-truncate w-xs bg-light p-2 rounded-pill text-center">3.14k</h5>
                                                        </div></div></li><li class="px-4 py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div class="avatar-title bg-primary bg-gradient p-1 rounded">#3</div>
                                                        </div></div><div class="flex-grow-1 overflow-hidden">
                                                        <p class="text-muted mb-1 text-truncate">Red color Cap</p>
                                                        <div class="fw-semibold font-size-15">$ 22.5</div>
                                                    </div><div class="flex-shrink-0">
                                                        <h5 class="fs-6 mb-0 text-truncate w-xs bg-light p-2 rounded-pill text-center">2.84k</h5>
                                                    </div></div></li><li class="px-4 py-3"><div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-3"><div class="avatar-sm">
                                                            <div class="avatar-title bg-primary p-1 bg-gradient rounded">#4</div>
                                                        </div></div><div class="flex-grow-1 overflow-hidden">
                                                            <p class="text-muted mb-1 text-truncate">Pocket T-shirt</p>
                                                            <div class="fw-semibold font-size-15">$ 21.5</div>
                                                        </div><div class="flex-shrink-0">
                                                            <h5 class="fs-6 mb-0 text-truncate w-xs bg-light p-2 rounded-pill text-center">2.06k</h5></div></div></li></ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Dashboard;