import React ,{ Component, PropTypes}from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux';
require('./index.scss');

//React component
class Counter extends Component{
    render(){
        const {value ,onIncreaseClick,onClick} = this.props;
        return(
            <div>
                <span>{value}</span>
                <button className="btn" onClick={onIncreaseClick}>IncreaseClick</button>
                <button className="btn2" onClick={onClick}>Click</button>
            </div>
        )
    }
}

//验证Counter
Counter.propTypes = {
    value:PropTypes.number.isRequired,
    onIncreaseClick:PropTypes.func.isRequired
};


//Action
const increaseAction = {
    type:'increase'
};
const creaseAction = {
    type:'decrease'
};

// Reducer

function counter(state={count:0},action) {
    console.log(['zzz',state]);
    const count = state.count;
    switch (action.type){
        case 'increase':
            return {count:count+1};
        case 'decrease':
            return {count:count-1};
        default:
            return state
    }
}

//store
const store = createStore(counter);

//Map Reduce state to component props

function mapStateToProps(state) {
    return{
        value:state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick:()=>dispatch(increaseAction),
        onClick:()=>dispatch(creaseAction)
    }
}

// Connected Component
const App = connect(mapStateToProps,mapDispatchToProps)(Counter);

render(

    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);