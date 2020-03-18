import React from 'react';
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import 'normalize.css/normalize.css'
import './style/style.scss'

const jsx = (
  <AppRouter />
)


ReactDOM.render(jsx, document.getElementById('app'))