import React, {Component} from 'react';

class Modal extends Component {
    style = {
        h2: {
            marginBottom: '2rem'
        }
    }

    constructor() {
        super();
        this.state = {opened:false}
    }

    render() {
        return (
            <>
                <button onClick={()=>{this.setState({opened: true})}}>Открой модальное окно</button>
                {this.state.opened?<div className={'modal'}>
                    <div className={'modalBody'}>
                        <h2 style={this.style.h2}>Модальное окошко</h2>
                        <button  onClick={()=>{this.setState({opened: false})}}>
                            Закрой меня
                        </button>
                    </div>
                </div>: ''}

            </>
        );
    }
}

export default Modal;