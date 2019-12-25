import React from 'react';
import './idea-card.styles.scss';

import {ReactComponent  as OpenIcon }from '../../assets/Icon ionic-md-open.svg';

import moment from 'moment'
const log = (...msg) =>{
    console.log(...msg)

}

class IdeaCard extends React.Component{
    constructor(props){

        super(props);
        this.state = {
            checked: false,
        }
    };
    render(){
        const {title, body, createdAt, sources, userName } = this.props
        return (
            <div className="idea-card">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="content">
                    <p>{body}</p>
                </div>
                <div className="footer">
                    <p>Created by <span className="color">{userName }</span>{moment(createdAt ? new Date(createdAt.seconds * 1000) : 0).fromNow()} </p>
                </div>
                <div className="icon-wrapper" onClick={() => this.setState({checked: !this.state.checked})}>
                    <OpenIcon className="open-icon" />
        
                </div>
                <div className={`sources ${this.state.checked? 'checked' : ''}`}>
                    <ul>
                        {sources.length ? Object.keys(sources).map(objKey => Object.keys(sources[objKey])
                            .map(key =>(
                                <li key={sources[objKey]['id']}><a  target="_blank" href={sources[objKey][key]}>{key}</a></li>
                            ))
                        ) : `This idea hasn't any source`}
                        {}
                    </ul>
                </div>
            </div>
        )
    }
}

export default IdeaCard