import React from 'react';
import Row from './Row';

const data = [
    {
        title:"Billy Elliot",
        length:123,
        rating:5,
        genres:["Drama","Comedia"],
        awards:2
    },
    {
        title:"Alicia en el país de las maravillas",
        length:142,
        rating:4.8,
        genres:["Drama","Acción","Comedia"],
        awards:3
    }
];

export default function Table() {
  return (
    
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Título</th>
                <th scope="col">Duración</th>
                <th scope="col">Rating</th>
                <th scope="col">Género</th>
                <th scope="col">Premios</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((row,i)=> {
                    return <Row {...row} key={i}/>
                })
            }
        </tbody>
        <tfoot>
            <tr>
                <th scope="col">Título</th>
                <th scope="col">Duración</th>
                <th scope="col">Rating</th>
                <th scope="col">Género</th>
                <th scope="col">Premios</th>
            </tr>
        </tfoot>
    </table>
    
  )
}
