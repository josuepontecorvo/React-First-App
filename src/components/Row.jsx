import React from 'react'

export default function Row(props) {
  return (
    
    <tr>
        <td>{props.title}</td>
        <td>{props.length}</td>
        <td>{props.rating}</td>
        <td>
            <ul>
            {props.genres.map((genre,i)=> {
                return <li key={i}>{genre}</li>
            })}
            </ul>   
        </td>
        <td>{props.awards}</td>
    </tr>
    
   
  )
}
