import React from 'react';

function NameList() {
    const names = ['Robin', 'Brad', 'Leo']
    return (
        <div>
          {/* <h2>{names[0]}</h2>  
          <h2>{names[1]}</h2>  
          <h2>{names[2]}</h2>   */}

          {/* With map method */}

          {
            names.map(name => <h2>{name}</h2>)
          }
        </div>
    )
}

export default NameList;
