import React from 'react';
import ReactDOM from 'react-dom';
import { categories } from './data/categories';
import Categories from './components/Categories/Categories';

require('./../sass/style.scss');

ReactDOM.render(
    <Categories categories={ categories }/>,
    document.getElementById('project-catalogue-page')
);