import classes from './Counter.module.css';
import {useDispatch, useSelector, connect} from 'react-redux';
import { Component } from 'react';
// const Counter = () => {
//   const counter = useSelector(state => state.counter);
//   const dispatch = useDispatch();

//   const increaseHandler = () => {
//     dispatch({type: "increase"})
//   };
//   const decreaseHandler = () => {
//     dispatch({type: "decrease"})
//   };

//   const toggleCounterHandler = () => {};


//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={increaseHandler}> + </button>
//         <button onClick={decreaseHandler}> - </button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {

  increaseHandler (){
    this.props.increase();
  }
  decreaseHandler () {
    this.props.decrease();
  }
  toggleCounterHandler() {

  }
  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.increaseHandler.bind(this)}> + </button>
          <button onClick={this.decreaseHandler.bind(this)}> - </button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  };
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch({type:'increase'}),
    decrease: () => dispatch({type:'decrease'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
