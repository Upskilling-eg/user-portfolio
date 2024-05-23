import React from 'react';
import SideBar from '../../components/shared/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
    return (
        <>
            <div className='base-container-bx'>
                <SideBar />
                <Outlet />
            </div>
        </>
    );
}

export default MasterLayout;
