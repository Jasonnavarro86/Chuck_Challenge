import React from 'react'
import JokesTable from './components/JokesTable'
import { Provider } from 'react-redux'
import store from './store';

const App = () =>
//Setting Provider at the root of the application
    <Provider store={store}>
        <section className="container mt-5">
          <hr />
          <JokesTable />
        </section>
    </Provider>

export default App;