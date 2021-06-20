import React from 'react'
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'
import Context from "../../context";

const styles = {
    ul: {
        listStyle: 'none'
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {
                props.arr.map((el, index) => <Context.Consumer key={el.id}>
                    {value=><TodoItem
                        onChange={props.onToggle} value={value}  arr={el} index={index}/>}
                </Context.Consumer> )
            }

        </ul>
    )
}

TodoList.propTypes = {
    arr: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,

}


export default TodoList
