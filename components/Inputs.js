import React, {Component} from 'react';
import {
    FormGroup,
    Col,
    InputGroup,
    FormControl,
    ControlLabel,
    Form,
    Glyphicon,
    Button
} from 'react-bootstrap';
import OptionalVal from './OptionVal';

export default class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: 'USDUSD',
            second: 'USDUAH',
            value: 1
        };
    }
    handleChangeFrom(event) {
        this.setState({first: event.target.value});
    }
    handleChangeTo(event) {
        this.setState({second: event.target.value});
    }

render(){
        const { first, second, value } = this.state;
        const { currName, change } = this.props;
        const placehold = first.split('').splice(3,5).join('');
        const container = currName.map((item,index)=>{
            return(
                <OptionalVal item={item} key={index}/>
            )
        });

    return (
        <Form horizontal>
            <FormGroup controlId="getVal">
                <Col xs={3}>
                    <InputGroup>
                        <InputGroup.Addon className="withBorder">
                            <Glyphicon glyph="arrow-up"/>
                        </InputGroup.Addon>
                        <FormControl componentClass="select"
                                     placeholder="select"
                                     value={first}
                                     onChange={this.handleChangeFrom.bind(this)}
                        >
                            {container}
                        </FormControl>
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <InputGroup>
                        <InputGroup.Addon>
                            <Glyphicon glyph="minus-sign"/>
                        </InputGroup.Addon>
                        <FormControl type="text"
                                     placeholder={placehold}
                                     onBlur={(e)=>{
                                        this.setState({
                                            value: e.target.value
                                        })
                                     }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <InputGroup>
                        <InputGroup.Addon className="withBorder">
                            <Glyphicon glyph="arrow-down"/>
                        </InputGroup.Addon>
                        <FormControl componentClass="select"
                                     placeholder="select"
                                     value={second}
                                     onChange={this.handleChangeTo.bind(this)}
                        >
                            { container }
                        </FormControl>
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <InputGroup>
                        <InputGroup.Addon>
                            <Glyphicon glyph="plus-sign"/>
                        </InputGroup.Addon>
                        <FormControl type="text"
                                     placeholder="Answer"
                                     value={this.props.answer}
                                     disabled
                                     onBlur={(e)=>{
                                        this.setState({
                                            value: e.target.value
                                        })
                                     }}
                        />
                    </InputGroup>
                </Col>
            </FormGroup>
            <FormGroup>
                <Button bsStyle="primary"
                        block
                        onClick={()=>{
                            change(first ,second, value)
                        }}
                > Convert
                </Button>
            </FormGroup>
        </Form>
    );
}
}
