import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const nodeTodoItems = this.props.todo.map((item, idx) => {
            return (
                <li key={idx}>
                    <input type="button" value="☓"
                        onClick={() => this.props.onClick(idx)} />
                    {item.title}
                </li>
            )
        });

        return (
            <ul>
                {nodeTodoItems}
            </ul>
        );
    }
}