import * as React from 'react';
import { Router, IndexRoute, Route, Link } from 'react-router';
import { Credit, CreditPersonalInfo } from './credit';

const Layout = ({ children }) => (
    <div>
        { children }
    </div>
);

const Home = () => (
    <div>
        <div><Link to="/deposit">Депозиты</Link></div>
        <div><Link to="/credit">Кредиты</Link></div>
    </div>
);

export const App  = ({ history }) => (
        <div>
            <Router history={ history }>
                <Route path="/" component={ Layout }>
                    <IndexRoute component={ Home } />

                    <Route path="/credit" component={ Credit }>
                        <IndexRoute component={ CreditPersonalInfo }/>
                    </Route>
                </Route>
            </Router>
        </div>
);