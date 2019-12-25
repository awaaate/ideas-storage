import firebase from 'firebase/app'
import 'firebase/firestore'



const config = {
    apiKey: "AIzaSyAwpo3yf7eOQIyISGt6RhbQ8O2BRX1juhA",
    authDomain: "linkag-9d931.firebaseapp.com",
    databaseURL: "https://linkag-9d931.firebaseio.com",
    projectId: "linkag-9d931",
    storageBucket: "linkag-9d931.appspot.com",
    messagingSenderId: "729455798770",
    appId: "1:729455798770:web:342fadea4f7f26f338a36b"
}

firebase.initializeApp(config)

const db = firebase.firestore()
export const getData  = async() =>{
    const data = []
    const collectionRef = await db.collection('ideas')
    const collectionSnapshot = await collectionRef.get()

    collectionSnapshot.docs.forEach(docSnapsot =>{
        data.push(docSnapsot.data())
    })

    return{ data, collectionRef}

}

export const addNewIdea = async ({id, ...ideaProps}) =>{
    const docRef = db.collection('ideas').doc(id);

    docRef.set({
        id,
        ...ideaProps
    });

}
export const ideas = [
    {
        title: 'idea1',
        id: 'dsadejweq',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, dolore!',
        sources: {
            photo: 'https://photo.com',
            exemple: 'https://exemple.com'
        }
    }
]
