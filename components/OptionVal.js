import React, {Component} from 'react';

export default class OptionVal extends Component {
    render(){
        const { item } = this.props;
        const placehold = item.split('').splice(3,5).join('');
        return(
            <option value={item}>{placehold}</option>
        )

    }
}
