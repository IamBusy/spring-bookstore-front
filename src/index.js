import dva ,{connect} from 'dva';
import { Router, Route } from 'dva/router';
import './index.css';

// 1. Initialize
const app = dva();

/*app.model({
    namespace: 'count',
    state: {
        current:0,
        record:0,
    },
    reducers:{
        add(state){
            console.log('count.add called');
            console.log(state);
            const newCurrent = state.current+1;
            return {
                ...state,
                record: newCurrent>state.record?newCurrent:state.record,
                current: newCurrent,
            };
        },
        minus(state){
            return {
                ...state,
                current:state.current-1
            }
        },
    },
    effects:{
        *add(action,{call,put}){
            yield call(delay,1000);
            yield put({type:'minus'})
        }

    },

});

function delay(timeout){
        return new Promise(resolve=>{
            setTimeout(resolve,timeout);
        });
    }

const CountApp = ({count,dispatch})=>{
    return (
        <div >
            <div >Highest Record: {count.record}</div>
            <div >{count.current}</div>
            <div >
                <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
  return { count: state.count };
}
const HomePage = connect(mapStateToProps)(CountApp);


app.router(({history}) =>
  <Router history={history}>
    <Route path="/" component={HomePage} />
  </Router>
);



app.start('#root');*/





app.model(require("./models/category"));
app.model(require("./models/product"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
