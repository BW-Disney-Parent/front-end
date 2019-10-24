import React from 'react';
import UserRequests from './UserRequests.js';
import ParentForm from './ParentForm.js';

function Dashboard() {
    return (
        <div>
            <div>
                <ParentForm />
            </div>
            <div>
                <UserRequests />
            </div>
        </div>
    )
};

export default Dashboard;