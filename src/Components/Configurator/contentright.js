import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl' 
import InputRange from 'react-input-range';
import './configurator.css';
import 'react-input-range/lib/css/index.css';

//Components
import Resultados from './resultados';

class ComponentRight extends Component {

    constructor(props) {
        super(props);

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.onChangeComplete = this.onChangeComplete.bind(this);

        this.setMontly = this.setMontly.bind(this);
        this.setSaveMontly = this.setSaveMontly.bind(this);
        this.setAnnual2 = this.setAnnual2.bind(this);

        this.setAnnualSave = this.setAnnualSave.bind(this);
        this.setEmployes = this.setEmployes.bind(this);


        this.state = {
            //Monthly ingredient spending use a range between 10-100
            valueMonthlyIng: 10,
            //Full-Time Employees... use a range between 1-10
            valueInpEmplyes: 1,
            //Estimated Food Cost Saving = Monthly ingredient spending * 0.3
            estFoodCostSave: 0,
            //estimated annual savings = Full-Time Employees * 1337 + Estimated
            annualSave: 0

        };
    }

    

    setMontly = (value) => {
        return new Promise((resolve, reject) => {
            resolve({ set: this.setState({ valueMonthlyIng: value }), value })
        })
    }
    //Estimated Food Cost Saving = Monthly ingredient spending * 0.3
    setSaveMontly = value => {
        return new Promise((resolve, reject) => {
            let n = (value * 0.3);
            let newvalor = n.toFixed(2);
            resolve({
                set: this.setState({
                    estFoodCostSave: newvalor
                }), value: newvalor
            })
        })
    }

    setAnnual2 = value => {
        return new Promise((resolve, rejects) => {
            let n = this.state.valueInpEmplyes;
            let newValue = (n * 1337) + value;
            resolve({ set: this.setState({ annualSave: newValue }), value: newValue })
        })
    }


    //Full-Time Employees... use a range between 1-10
    setEmployes = (value) => {
        return new Promise((resolve, reject) => {
            resolve({ set: this.setState({ valueInpEmplyes: value }), value })
        })
    }
    //estimated annual savings = Full-Time Employees * 1337 + Estimated
    setAnnualSave = value => {
        return new Promise((resolve, reject) => {
            let n = (value * 1337) + this.state.estFoodCostSave;
            resolve(this.setState({
                annualSave: n
            }))
        })
    }

    handleChangeInput(value, name) {
        // console.log(name)
        switch (name) {
            case 'input1':
                this.setMontly(value).
                    then(res => {
                        this.setSaveMontly(res.value).
                        then(res => {
                            this.setAnnual2(res.value).
                            then(res => res.value)
                        })
                    });
                break;
            case 'input2':
                this.setEmployes(value).
                    then(res => { this.setAnnualSave(res.value) });
                break;
            default:
                return null;
        }


    }

    onChangeComplete(value, name) {
        console.log(value, name)
    }




    render(){
        return(
            <Col md={{ span: 7, offset: 1 }} style={{ marginBottom: '20px' }} >
                            <Col md={12} style={{ backgroundColor: 'none' }}>
                                <Row>
                                    <Col md={12}>
                                        <Row >
                                            <Col xs={6} md={4} >
                                                <span className="spanInput" >
                                                    Monthly ingredient spending</span>
                                            </Col>
                                            <Col xs={6} md={8} className="divInputfather">
                                                <Col xs={8} md={3}>
                                                    <InputGroup>
                                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                                            disabled
                                                            className="divNunIndicador"
                                                            value={this.state.valueMonthlyIng}
                                                            onChange={value => this.setMontly(value)}
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Col>
                                        </Row>

                                    </Col>

                                    <Col md={12} style={{ margin: 0 }}>
                                        <form style={{ padding: 0, paddingBottom: 0 }} className="form" id="i">
                                            <InputRange
                                                maxValue={100}
                                                minValue={10}
                                                value={this.state.valueMonthlyIng}
                                                onChange={(value, name = 'input1') => this.handleChangeInput(value, name)}
                                            />
                                        </form>
                                    </Col>

                                </Row>
                            </Col>

                            <Col md={12} style={{  marginTop: '50px' }}>
                                <Row>
                                    <Col md={12}>
                                        <Row >
                                            <Col xs={6} md={4}>
                                                <span className="spanInput" >
                                                    Full-time employees that process invoices</span>
                                            </Col>
                                            <Col xs={6} md={8} className="divInputfather">
                                                <Col xs={8} md={3}>
                                                    <InputGroup>
                                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                                            disabled
                                                            className="divNunIndicador"
                                                            value={this.state.valueInpEmplyes}
                                                            onChange={value => this.setEmployes(value)}
                                                        />
                                                    </InputGroup>
                                                </Col>
                                            </Col>
                                        </Row>

                                    </Col>

                                    <Col md={12} style={{ margin: 0 }}>
                                        <form style={{ padding: 0, paddingBottom: 0 }} className="form">
                                            <InputRange


                                                maxValue={10}
                                                minValue={1}
                                                value={this.state.valueInpEmplyes}
                                                onChange={(value, name = 'input2') => this.handleChangeInput(value, name)}
                                            //onChangeComplete={this.onChangeComplete}
                                            />
                                        </form>
                                    </Col>

                                </Row>
                            </Col>

                           <Resultados 
                           estFoodCostSave={this.state.estFoodCostSave}
                           annualSave={this.state.annualSave}
                           />
                        </Col>
        )
    }
}

export default ComponentRight;