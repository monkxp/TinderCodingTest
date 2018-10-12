
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from "react-router-dom";

import actions from '../redux/actions/actions.js';
import PersonModel from '../tools/PersonModel.js';

import '../styles/Card.css';
import 'antd/dist/antd.css';

import { Button, Icon } from "antd";

class Card extends React.Component{

	componentDidMount() {
		let { actions  } = this.props;
    	actions.getNewInfo();
  	}

  	myFavorite(){
  		this.props.history.push('/myfavorite');
  	}

  	addFavorite(event,person){
		let { actions  } = this.props;
		actions.addFavorite(person);
  	}

	render() {
  
		let { personInfo, actions  } = this.props;
        let person ={};
        if(personInfo.results){
			person = PersonModel.getPerson(personInfo.results[0]);
        }
		
		return(
			<div className="cardWrap">
				<div > 
					<img height="300px" width="300px" alt="look at me!" src={person.pic} />
				</div>

				<div className='personName'>{person.firstName}, {person.age}</div>
			
				<div>
					<Button className='iconBtn' style={{border:0 +'px'}}  onClick={(ev) => {this.addFavorite(ev,person)}} >
						<Icon type='heart'style={{fontSize:30 + 'px'}} />
					</Button>
					<Button className='iconBtn' style={{border:0 +'px'}} onClick={actions.getNewInfo} >
						<Icon type='frown'style={{fontSize:30 + 'px'}} />
					</Button>
					<Button className='iconBtn' style={{border:0 +'px'}} onClick={() => this.myFavorite()} >
						<Icon type='bars'style={{fontSize:30 + 'px'}}  />
					</Button>
					
				</div>
			</div>
		);
	}

}

const mapStateToProps = state => ({
    personInfo: state.personInfo
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));