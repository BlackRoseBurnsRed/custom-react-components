import {Button} from "./components/Button/Button";
import React from 'react';

export class Kit extends React.Component {
    render() {
        return (
            <Button onClick={() => {alert('Clicked')}}/>
        )
    }
}