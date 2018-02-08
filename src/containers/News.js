import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions/NewsActions';


const mapStateToProps = (state) => ({
	news:state.news,
	category:state.filters.categoryFilter
})

const mapDispatchToProps=(dispatch)=>({
	fetchData : () => dispatch(fetchData())
})


class News extends Component{

	componentWillMount() {
    this.props.fetchData();
  }

		getNews=()=>{
				const { news } = this.props.news;
				return(

					<div>
					{news.filter(news=>news.category==this.props.category)
						.map((tile,index) =>(
						<div key={index} className="news-container">
							{tile.name}
						</div>
						))}	
					</div>
				)
		}

	render(){


		return(
				<div>
					{this.getNews()}
				</div>
			)
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(News)