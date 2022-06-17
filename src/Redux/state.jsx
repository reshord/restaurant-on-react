import postReducer from './myPost-reducer'
import dialogReducer from './dialogPage-reducer'

const store = {
    _State: {
        card: [
        <Card title="Hamburger" img="https://i.ibb.co/9nNq2BG/hamburger.jpg" weight="200" price="250"/>,
        <Card title="Cheeseburger" img="https://i.ibb.co/F4k7KR8/cheeseburger.jpg" weight="240" price="310"/>,
        <Card title="Big Mac" img="https://i.ibb.co/mSZyxd7/big-mac.jpg" weight="300" price="350"/>,
        <Card title="Run Tasty" img="https://i.ibb.co/7VtPjg8/run-tasty.jpg" weight="265" price="345"/>
        ],
        contacts: {
            country: 'Ukraine', 
            city: 'Kiyv', 
            number: '+38023423498'
        },

    
    },

    getState() {
        return this._State;
    },
    subscribe(observer) {
        this._rerenderComponent = observer
    },

    rerenderComponent() {   
        console.log('changed');
    },
    
    dispatch(action) {

        postReducer(this._State.MyPost, action)

        dialogReducer(this._State.dialogPage, action)

        this._rerenderComponent(this._State)

    }
}





