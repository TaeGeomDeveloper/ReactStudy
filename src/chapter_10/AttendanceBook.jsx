import React from 'react';

const students = [{
  id : 1,
  name: "inje",
},
{
  id : 2,
  name: "Steve",
},
{
  id : 3,
  name: "Jeff",
}
];

function AttendanceBook(props) {
  return (
    <div>
      {students.map((students,index) =>{
        return <li key={students.id}>{students.name}</li>
        // return <li key={index}>{students.name}</li>
      })}
    </div>
  );
}

export default AttendanceBook;

