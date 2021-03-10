import React from 'react'

export default function TodoList(props) {
    return(
        <div>
    <ul>
    {props.tasks.map(t=>(<li key={t.id}><input type="checkbox"/>{t.body}<input type="radio" onClick={props.Delete()}/></li>))}
    </ul>
        </div>
    )
}
