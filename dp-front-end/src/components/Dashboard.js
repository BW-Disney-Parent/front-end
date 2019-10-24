import React from 'react';
import UserRequests from './UserRequests.js';
import ParentForm from './ParentForm.js';
import GetRequest from './GetRequest.js';

function Dashboard() {
    return (
        <div>
            <div>
                <ParentForm />
            </div>
            <div>
            <h3>Your Requests</h3>
                <UserRequests />
            </div>
            <div>
                <h3>Posted Requests</h3>
                <GetRequest/>
            </div>
        </div>
    )
};

export default Dashboard;