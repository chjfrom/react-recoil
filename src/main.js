import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
// eslint-disable-next-line no-unused-vars
import css from '../public/reset.css'
import { RecoilRoot } from 'recoil';


ReactDOM.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
    document.getElementById('app')
);