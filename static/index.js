import React from 'react';
import ReactDOM from 'react-dom';

import {Kit} from "./kit";

class CustomComponents extends React.Component {
    render() {
        return (
            <Kit />
        )
    }
}

ReactDOM.render(<CustomComponents/>, document.getElementById('root'));