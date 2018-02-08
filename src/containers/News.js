import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions/NewsActions';



class News extends Component{

	componentDidMount() {
    this.props.fetchData();
  }


	render(){
		const { news } = this.props.news;

		return(
				<div>
				{news.map((tile,index) =>(
					<div key={index} className="news-container">
						{tile.name}
					</div>
					))}				
				</div>
			)
	}
}

const mapStateToProps = (state) => ({
	news:state.news
})

const mapDispatchToProps=(dispatch)=>({
	fetchData : () => dispatch(fetchData())
})

export default connect(mapStateToProps,mapDispatchToProps)(News)