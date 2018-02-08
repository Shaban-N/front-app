
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';

export const changeFilter = newFilter => ({
	type: CHANGE_FILTER,
	categoryFilter: newFilter,
})

export const resetFilters = () =>({
	type:RESET_FILTERS,
})
