import React, { useState } from "react";
import cx from "classnames";
import style from "./Todo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export default function TodoList(props) {
  const [done, isDone] = useState(false);
  const classNames = cx({
    [style.done]: done===true,
  });

  return (
    <div>
      <ul>
        {props.tasks.map((t) => (
          <li className={classNames} key={t.id}>
            <input
              type="checkbox"
              onClick={() => {
                isDone(!done);
              }}
            />       
            {t.body}
            <button
              onClick={() => {
                props.delete(t.id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
