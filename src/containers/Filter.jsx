import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as filterActions from '../actions/filterActions';

const category=['business', 'entertainment', 'gaming', 'general', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];

const mapStateToProps = (state) => ({
	categoryFilter: state.filters.categoryFilter
});

const mapDispatchToProps = (dispatch) => ({
	onCategoryChange: (newCategory) => dispatch(filterActions.changeFilter(newCategory)),
	resetFilter:() => dispatch(filterActions.resetFilter())
});

 class Filter extends Component {
 	 constructor(props) {
    super(props);
    this.state = {category: 'business'};
  }

  onChange = (e,dispatch) => {
  	 this.setState({category: e.target.value});
  	 this.props.onCategoryChange(e.target.value)
  }

	/*renderActiveFilters = () => {
	const { activeFilters, changeFilters,resetFilters } = this.props;
		return (
			<div >
				{activeFilters.map(filter => (
					<div onClick={changeFilters}>
						{filter}
					</div>
					))}
				<button onClick={resetFilters}>reset</button>
			</div>
		)
	}*/
	
	render() {

		 const categoriesOptions = category.map((name,id) => (
      <option value={name} key={id}> 
        {name}
      </option>)
    );

		return (
			<div>
			<select name='category'
                  className="category__select"
                  value={this.state.value}
                  onChange={this.onChange}>
     		<option value='' disabled>Select category</option>
        {categoriesOptions}
      </select>
				{/*this.renderActiveFilters()*/}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

  