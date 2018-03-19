import {Button} from "./components/Button/Button";
import {Checkbox} from "./components/Checkbox/Checkbox";
import React from 'react';

export class Kit extends React.Component {
    render() {
        return (
            <div>
                <Checkbox label='custom checkbox'/>
                <br/>
                <Button onClick={() => {alert('Clicked')}}/>
            </div>
        )
    }
}