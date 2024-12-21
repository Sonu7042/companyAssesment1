import React from 'react';


const DisplayData = ({ data }) => {
    // console.log(data);
    return (
        <div className="data-container">
            <h2 className="data-title">Your Tasks</h2>
            <ol className="task-list">
                {data.map((item, index) => (
                    <li key={index} className="task-item">
                        {item.task}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default DisplayData;
