import { combineReducers } from 'redux';
import todos from '@reducers/todos';
import visibilityFilter from '@reducers/visibility-filter';

const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default rootReducer;