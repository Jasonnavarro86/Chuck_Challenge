import React from 'react'
import JokesTable from './components/JokesTable'
import { Provider } from 'react-redux'
import store from './store';

const App = () =>

    <Provider store={store}>
        <section className="container mt-5">
          <hr />
          <JokesTable />
        </section>
    </Provider>

export default App;