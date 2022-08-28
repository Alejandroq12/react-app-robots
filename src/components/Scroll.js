import React from 'react';


const scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default scroll;