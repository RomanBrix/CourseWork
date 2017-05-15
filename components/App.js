import React, { Component } from 'react';
import {
    Button,
    Panel,
    ListGroup
} from 'react-bootstrap';
import fx from 'money';
import Currency from './Currency';
import One_Item from './Item';
import Inputs from './Inputs';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currName:[],
            rates: {},
            answer: 'Answer'
        };
    }

    componentDidMount(){
        Currency((fxRates) => {
            let rates = fxRates.quotes;
            let data = [];
            let currName = [];
            for (let one in rates) {
                currName.push(one);
                const currentCurr = one.split('').splice(3,5).join('');
                data.push({
                    [currentCurr]: rates[one]
                });
            }
            this.setState({
                data,
                currName,
                rates
            });
        });
    }

    reload(){
        Currency((fxRates) => {
            let rates = fxRates.quotes;
            let data = [];
            let currName = [];
            for (let one in rates) {
                currName.push(one);
                const currentCurr = one.split('').splice(3,5).join('');
                data.push({
                    [currentCurr]: rates[one]
                });
            }
            this.setState({
                data,
                currName,
                rates
            });
        });
    }

    change(first, second, value){
        const { rates } = this.state;
        fx.rates = rates;  // fx from money.js
        const rate = fx(value).from(first).to(second);
        this.setState({
            answer: rate.toFixed(3)
        })


    }
    render() {
        const { currName, answer } = this.state;
        const container = this.state.data.map((item, index) => {
            if(!item.USD) {
                return <One_Item key={ index } item={ item }/>
            }
        });
        return (<div>
            <Inputs change={ this.change.bind(this) } currName={ currName } answer={ answer }/>
            <Panel header='1 USD is'>
                <ListGroup>
                    { container }
                </ListGroup>
            </Panel>
            <Button block bsSize="small" onClick={ this.reload.bind(this) }>Reload Exchange Rates</Button>

        </div>)


    }
};