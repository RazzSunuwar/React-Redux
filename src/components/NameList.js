import React from 'react';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Robin',
            age: 20,
            skill: 'JavaScript'
        },{
            id: 2,
            name: 'Brad',
            age: 21,
            skill: 'NodeJS'
        },{
            id: 3,
            name: 'Leo',
            age: 22,
            skill: 'ReactJS'
        }
    ];
    const personList = persons.map(
         persons => (
            <h2>
                I am {persons.name}.
                I am {persons.age} years old.
                I know {persons.skill}
            </h2>
        ))
    return <div>{personList}</div>
}

export default NameList;
