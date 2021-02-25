import React from 'react';

function Todo(props) {

    return (
        <div className="list">
            <p id={props} className="item">
                {props.item}
            </p>
        </div>
    )
};

export default Todo;

