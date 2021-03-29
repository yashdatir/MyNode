const createStore = require('redux').createStore;

//REDUCERS
const INITIAL_STATE = {
  name: 'Yash',
};
const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        name: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

//ACTIONS
const changeData = (data) => {
  return {
    type: 'CHANGE',
    data,
  };
};

const store = createStore(testReducer);

console.log('INITIAL_STATE:', store.getState());

store.subscribe(() => {
  const data = store.getState();
  console.log('STATE_UPDATED:', data);
});

store.dispatch(changeData('Abcd'));
store.dispatch(changeData('Mayank'));
