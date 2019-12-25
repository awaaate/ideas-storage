import React from 'react';
import logo from './logo.svg';
import './App.scss';

import {getData} from './firebase/firebase.functions';

import IdeaForm from './components/idea-form/idea-form.component';
import IdeasList from './components/ideas-list/ideas-list.component';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      ideas: []
    }
  }
  async componentDidMount(){
    const {data, collectionRef} = await getData()

    collectionRef.onSnapshot(snapshot =>{

      let ideas = []
      snapshot.docs.forEach(docSnapshot =>{

        ideas.push(docSnapshot.data())
      })

      this.setState({ideas})
    })
    this.setState({ideas: data})
  }
  
  render(){
    const {deas} = this.state
    return(
      <div className="App">
        <IdeaForm/>
        <IdeasList ideas={this.state.ideas}/>
      </div>

    )
  }
}

export default App;
