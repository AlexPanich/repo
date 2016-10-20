import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'

// render(<ArticleList articles={articles}/>, document.getElementById('container'));
// function wrappedIncrement() {
//   store.dispatch(increment())
// }
// render(<Counter count = {store.getState()} increment = {wrappedIncrement}/>, document.getElementById('container'));
//
// store.subscribe(() => {
//   render(<Counter count = {store.getState()} increment = {wrappedIncrement}/>, document.getElementById('container'));
// })

render(<Root />, document.getElementById('container'));
