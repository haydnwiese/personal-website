import React from 'react';
import './SubTitle.css';

const SubTitle = (props) => (
    <div>
        <div id='aboutTitle'>
            {props.title}
        </div>
        <div id='aboutDividerContainer'>
            <div id='aboutDivider' />
        </div>
    </div>
);

export default SubTitle;