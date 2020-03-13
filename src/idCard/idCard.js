import React from 'react';

const IdCard = (props) => {
    return (
        <div>
            <div>
                <img src={props.picture} alt="student-pic"/>
            </div>
            <p><strong>Last name: </strong>{props.lastName}</p>
            <p><strong>First name: </strong>{props.firstName}</p>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Height: </strong>{props.height}</p>
            <p><strong>Birth: </strong>{props.birth}</p>
        </div>
    );
};

export default IdCard;