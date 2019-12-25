import React from 'react'
import './ideas-list.stles.scss'
import IdeaCard from '../idea-card/idea-card.component';
const log = (msg) =>{
    console.log(msg)
}
const IdeasList = ({ideas}) =>  (
    <div className="ideas-list">
        {
        ideas.map(({id, ...otherProps}) =>{
            log(id)
            return(
                 <IdeaCard key={id} {...otherProps}/>
            )})}
    </div>
)
export default IdeasList