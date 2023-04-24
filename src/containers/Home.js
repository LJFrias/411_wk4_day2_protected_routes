import { connect } from "react-redux";

import Home from '../components/Home'

// map the global state of cars to props

const mapStateToProps = (state) => {
    // return an object that maches the key in state.js
    return {
        cars: state.cars
    }
}

// connect the rdux container to the Home component
export default connect(mapStateToProps)(Home)