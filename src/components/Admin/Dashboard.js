import React from 'react';
import AdminSid from './AdminSid/AdminSid';
import ManageBlog from './ManageBlog/ManageBlog';

const Dashboard = () => {
    return (
        <div className="container mx-auto flex flex-wrap py-4 ">
            <AdminSid/>
            <ManageBlog/>
        </div>
    );
};

export default Dashboard;