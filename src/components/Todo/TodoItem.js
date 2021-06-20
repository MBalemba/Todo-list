import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import Context from "../../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem',
    }
}

function TodoItem({value, arr, index, onChange}) {
    const classes = [];
    if (arr.completed === true) {
        classes.push('done')
    }
    return (
        <li onClick={(e) => {
            if (e.target.tagName === 'BUTTON') {
                debugger
                value.removeTodo(arr.id)
            } else{
                onChange(arr.id)
            }
        }} style={styles.li}>
           <span className={classes.join(' ')}>
               <input checked={arr.completed ? true : false} style={styles.input} type="checkbox"/>
               <strong>
               {arr.id + 1 + ' '}
                </strong>

               {arr.name}
           </span>

            <button className={'rm'}> &times;</button>

        </li>
    )
}

TodoItem.propTypes = {
    arr: PropTypes.exact({
        name: PropTypes.string,
        id: PropTypes.number,
        completed: PropTypes.bool
    }).isRequired,
    onChange: PropTypes.func.isRequired
}


export default TodoItem;