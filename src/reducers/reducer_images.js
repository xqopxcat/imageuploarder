import _ from 'lodash';
import { FETCH_IMAGE }  from '../actions';

export default function(state = [], action){
	switch(action.type){
		case FETCH_IMAGE:
			return _.mapKeys(action.payload.data, 'name');
	}
	return state;
}