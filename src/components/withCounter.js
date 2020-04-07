import React from 'react';

const updatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render(){
            return <OriginalComponent name='Ramsey' />
        };
    };
    return NewComponent 
}
export default updatedComponent;

