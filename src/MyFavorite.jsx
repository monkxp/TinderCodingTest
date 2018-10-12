import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';

import { List, Avatar, Icon , Button} from 'antd';
import actions from './redux/actions/actions.js';

import 'antd/dist/antd.css';
import './styles/MyFavorite.css';

class MyFavorite extends React.Component{

	componentDidMount() {
		let { actions  } = this.props;
    	actions.getFavorites();
  	}

  	backHome(){
  		this.props.history.push('/');
  	}

  	deleteFavorite(ev,uuid){
  		let { actions  } = this.props;
    	actions.deleteFavorite(uuid);
  	}

	render() {
		let { favorites } = this.props;
		
		return(
			<div className="wrap">
				<div className="backWrap">
					<Button type="primary" shape="circle" icon="arrow-left" onClick={() => this.backHome()}/>
				</div>
				<List
	    			itemLayout="vertical"
	    			size="middle"
	    			pagination={{
	      			onChange: (page) => {
	        			//console.log(page);
	      			},
	      			pageSize: 3,
	    			}}
	    			dataSource={favorites}
	    			footer={<div></div>}
	    			renderItem={item => (
	      				<List.Item
	        				key={item.firstName}
	        				actions={[ <Icon type='delete' style={{ marginRight: 8,fontSize:20 +'px' }} onClick={(ev) => this.deleteFavorite(ev,item.uuid)} />]}
	        				extra={<img width={150} alt="logo" src={item.pic} />}
	      				>
	       					 <List.Item.Meta
	          					avatar={<Avatar src={item.avatar} />}
	          					title={<span className='capitalizeName'>{item.firstName}</span>}
	        					/>
	        				<span className="capitalizeName">{item.firstName}</span>  
	        				<span className="capitalizeName">{item.lastName}</span> 
	        				<span>,{item.age}</span>
	      			</List.Item>
	    			)}
	  			/>


  			</div>
		);
	}

}

const mapStateToProps = state => ({
    favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyFavorite));