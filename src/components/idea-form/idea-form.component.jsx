import React from 'react';

import InputCard from '../input-card/input-card.component'

import {addNewIdea} from '../../firebase/firebase.functions'
import './idea-form.styles.scss'
class IdeaForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id: '',
            title: '',
            body: '',
            sources: [],
            sourceLink: '',
            sourceName: '',
            userName: '',
            createdAt: ''
        }
    }
    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    handleNewSource = (event) => {
        const {sources, sourceLink, sourceName} = this.state
        const id = '_' +Math.random().toString(36).substr(2, 5);

        sources.push({[sourceName]: sourceLink, id})
        //console.log(sourceName, sourceName, sources)

        this.setState({
            sources, 
            sourceName:"", 
            sourceLink:""
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const {title, body, sources, userName} = this.state
        const id = Math.random().toString(36).substr(2, 9);
        addNewIdea({title, body, sources, userName , id, createdAt: new Date()})
    }
    render(){
        const {title, body, sourceLink, sourceName, userName} = this.state
        return (
            <div className="idea-form">
                <div className="header">
                    <h3>New idea</h3>
                    <p>Create and add a new idea to your storage</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="column">
                        <InputCard span="2" title="Title">
                            <input 
                                type="text"
                                name="title"
                                value={title}
                                onChange={this.handleChange}
                                placeholder="Title"
                            />
                        </InputCard>
                        <InputCard  span="4" title="Body" full>
                            <textarea 
                                type="text"
                                name="body"
                                value={body}
                                placeholder="Start tapyng the body of the idea"
                                onChange={this.handleChange}
                            />
                        </InputCard>
                    </div>
                    <div className="column">
                        <InputCard span="3" title="Sources" className="sources">
                            <input 
                                type="text"
                                name="sourceName"
                                value={sourceName}
                                onChange={this.handleChange}
                                placeholder="Name of the source"

                            />
                            <input 
                                name="sourceLink"
                                type="link"
                                value={sourceLink}
                                onChange={this.handleChange}
                                placeholder="Link of the source"
                            />
                            <span className="more-btn" onClick={this.handleNewSource}>Add more souces</span>
                        </InputCard>

                        <InputCard  span="2"title="User Name">
                            <input 
                                type="text"
                                placeholder="User Name"
                                onChange={this.handleChange}
                                name='userName'
                                value={userName}
                            />
                        </InputCard>
                        <button className="btn" data-text="save this idea" type="submit" >Save This idea</button>
                    </div>
                </form>
        
            </div>

        )
    }
}
export default IdeaForm