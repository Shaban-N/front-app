import {FETCH_DATA, FETCH_DATA_SUCCESS} from '../constants/ActionTypes'

const url = 'https://newsapi.org/v2/sources';
const apiKey = 'baedad3a9e344b7a9e0ef47443f4884e';

const countries = ['au', 'de', 'gb', 'in', 'it', 'us']

/*
export function fetchData() {
    try {

    	const fetches = countries
    		.map(country => fetch(`${url}?apiKey=${apiKey}&country=${country}&limit=0`));

			return async (dispatch) => {
				dispatch({type: 'FETCH_DATA'})
		    	const responses = await Promise.all(fetches);
		    	const allNews = await Promise.all(responses.map(result => result.json()));
				  dispatch(fetchDataSuccess(allNews.map(news => news.articles)));
			}
				
  	} catch(error){
  			console.log(error)
  		} 

}

*/

export function fetchData() {
    try {
    	var rez=[]
    	var req = new Request(`${url}?apiKey=${apiKey}`);
    	
    					
			return async (dispatch) => {
				const fetches = await fetch(req)
    					.then(result => result.json())
    					.then(data => data.sources)
    			console.log(fetches)
				dispatch({type: 'FETCH_DATA'})
				dispatch(fetchDataSuccess(fetches));
			}
				
  	} catch(error){
  			console.log(error)
  		} 

}
export const fetchDataSuccess = (news) =>({
	type:FETCH_DATA_SUCCESS,
	news
})