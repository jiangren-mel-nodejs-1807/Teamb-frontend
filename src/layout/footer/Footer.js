import React, { Component } from 'react';
import Context from '../../components/context/Context';
import './footer.scss';

const context = [
    {
        title:"Adminstrator",
        value:"Dawson Sun",
        url:"#"
    },
    {
        title:"Email",
        value:"sdc880123@gmail.com",
        url:"sdc880123@gmail.com"
    },
    {
        title:"Phone",
        value:"0451193278",
        url:"#"
    }
]

export default class Footer extends Component {
    constructor(props){
        super()
        this.state = {
            context:[]
        }
    }

    componentDidMount(){
        this.setState({
            context:[...context]
        })
    }

    render() {
        return (
            <div className='footer'>
                <div className="help">
                    <h4 className="help-title">HELP AND SUPPORT</h4>
                    <p>For users experiencing difficulties using LMS, please contact technital support.</p>
                    <Context context={this.state.context}/>
                </div>
                <div className="quick-link">
                    <h4>QUICK LINKS</h4>
                    <a href='https://jiangren.com.au/service'>JR Academy</a>
                </div>
            </div>
        );
    }
}

