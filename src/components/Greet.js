import React from 'react';

const Greet = ({ name, nickName }) => {
    return (
        <div>
            <h1>
                Hello {name} a.k.a {nickName}
            </h1>
        </div>
    )
};


export default Greet;

