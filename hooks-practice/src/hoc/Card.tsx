import React, {ReactNode, Component} from 'react';

type Props = {
    children:ReactNode
}

export class Card extends Component<Props>{
    render(){
    return <div className="card">{this.props.children}</div>
    }
}
