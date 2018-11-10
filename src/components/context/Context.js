import React, { Component } from 'react';
import './contextItem.scss'

export default class Context extends Component {
    render() {
        return (
                this.props.context.map(
                    info => {
                        return(
                            <div>
                                <span>{info.title}:</span>
                                <a className="context-link" href={(info.title === 'Email') ? ('mailto:' + info.url) : info.url}> {info.value}</a>
                            </div>
                        )
                    }
                )
        );
    }
}
