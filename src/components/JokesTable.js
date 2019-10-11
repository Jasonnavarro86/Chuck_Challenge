import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadJokes, fetchJokes, deleteJokes } from '../actions/jokesTableActions';


class JokesTable extends Component {

    componentWillMount() {
        this.props.loadJokes()
    }

    getJokes = () => {
        this.props.fetchJokes();
    }

    deleteJoke = (jokeIndex) => {
        this.props.deleteJokes(jokeIndex)
    }

    render() {

        const postItems = this.props.jokes.map((post, index) => (

            <div key={post.id} className="row mb-3">
                <div className="col"></div>
                <p className="col-6 text-left" >
                    {post.joke}
                </p>
                <div className="col-1">
                    <button onClick={() => this.deleteJoke(index)} className="btn btn-dark"><i className="fas fa-trash"></i></button>
                </div>
                <div className="col"></div>
            </div>

        ))

        return (
            <div className="row justify-content-center text-center">
                <h1 className="col-12 mb-5 bold">The Best Chuck Norris Facts</h1>
                <div className="col-12 mb-5">
                    <button onClick={() => this.getJokes()} className="btn btn-primary loadBtn">
                        {this.props.jokes.length === 0 ? "Load Chuck Norris Facts" : "Load 10 New Facts"}
                    </button>
                </div>
                <div className="col-12">
                    {postItems}
                    <div>
                        <img src={"https://media1.tenor.com/images/00ae7fd2b2acbdc7b36600c73941ec6a/tenor.gif?itemid=9540227"} alt="chuck norris crushing buildings" />
                    </div>
                </div>
            </div>
        )
    }
}
JokesTable.propTypes = {
    loadJokes: PropTypes.func.isRequired,
    fetchJokes: PropTypes.func.isRequired,
    deleteJokes: PropTypes.func.isRequired,
    jokes: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    jokes: state.Jokes.renderList
})

export default connect(mapStateToProps, { loadJokes, fetchJokes, deleteJokes })(JokesTable);