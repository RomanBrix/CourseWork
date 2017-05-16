import React, {Component} from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default class One_Item extends Component {
    render(){
        const { item } = this.props;
        let first;
        let second;
        for (let word in item){
            first = word;
            second = item[word].toFixed(2);
        }
        return(
            <ListGroupItem>{ second } { first }</ListGroupItem>
        );
    }
}
