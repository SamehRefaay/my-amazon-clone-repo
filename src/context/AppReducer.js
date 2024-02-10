export const initialState = {
	basket: [],
	user: null,
};

export const getBasketValue = basket => {
	return basket.reduce((acc, item) => {
		return acc + item.price;
	}, 0);
};

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'ADD_TO_CART':
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case 'CHANGE_ITEM_COUNT':
			const cleanedBasket = state.basket.filter(item => item.id !== action.id);
			return {
				...state,
				basket: [...cleanedBasket, ...action.payload],
			};

		case 'REMOVE_FROM_CART':
			const newBasket = state.basket.filter(item => item.id !== action.id);
			return {
				...state,
				basket: newBasket,
			};
		case 'EMPTY_BASKET':
			return {
				...state,
				basket: [],
			};
		default:
			return state;
	}
};

export default AppReducer;
