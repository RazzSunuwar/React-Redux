import React from 'react';
import Person from './Person';

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
    const personList = persons.map(person => <Person key={person.id} person = {person} />)
    return <div>{personList}</div>
}

export default NameList;
