import React from 'react';

export const SideBar = (props) => {
    let className = 'sideBar'
    if(props.isActive) {
        className += ' sideBarActive'
    }

    return(
        <div id='sidebar' className={className}>
        </div>
    );
}