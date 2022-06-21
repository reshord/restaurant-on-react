import Card from "../Content/Card"


const initialState = {
    Content: {
        card: [
            <Card title="Hamburger" img="https://i.ibb.co/9nNq2BG/hamburger.jpg" weight="200" price="250"/>,
            <Card title="Cheeseburger" img="https://i.ibb.co/F4k7KR8/cheeseburger.jpg" weight="240" price="310"/>,
            <Card title="Big Mac" img="https://i.ibb.co/mSZyxd7/big-mac.jpg" weight="300" price="350"/>,
            <Card title="Run Tasty" img="https://i.ibb.co/7VtPjg8/run-tasty.jpg" weight="265" price="345"/>
            ],
    }
}

const ContentReducer = (state = initialState, action) => {
    
        return state
    }
   

export default ContentReducer