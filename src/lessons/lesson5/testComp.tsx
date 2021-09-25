import React from 'react';


export default class TestComp extends React.Component<any, any> {
    //@ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            bindIncreaseCount : this.increaseCount.bind(this),
        };
    }

    increaseCount(event: React.MouseEvent) {
        console.log(this.state.count);
        const count = this.state.count + 1
        this.setState({ count });
    }

    render(){
        return (
            <div>
                <h1>test</h1>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <button onClick={this.state.bindIncreaseCount}>Click</button>
            </div>
        )
    }

}