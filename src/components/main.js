import React from 'react';
import Aux from '../hoc/aux'
import Layout from '../components/layout/layout'
import {Route} from 'react-router-dom'
import Intro from '../components/pages/s00p00/intro'
import Page1 from '../components/pages/s01p01/s01p01'

const main = (props) => (
    <Aux>

        <Layout>
            <Route path="/" exact component={Intro} />
            <Route path="/report" exact component={Page1} />
        </Layout>

    </Aux>
)

export default main;