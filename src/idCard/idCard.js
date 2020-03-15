import React from 'react';

const IdCard = (props) => {
    return (
        <div class="id-wrapper">
                <img src={props.picture} alt="student-pic" id="student-pic"/>
            <div>
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}m</p>
                <p><strong>Birth: </strong>{props.birth.toString()}</p>
            </div>
        </div>
    );
};

export default IdCard;