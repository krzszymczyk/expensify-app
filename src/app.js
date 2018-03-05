import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import {setTextFilter} from './actions/filters';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
const store = configureStore();

store.dispatch(addExpense({description:'Water bill',amount:240, createdAt:-2000}));
store.dispatch(addExpense({description:'Gas bill',amount:420, createdAt:2000}));

store.dispatch(setTextFilter('water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
