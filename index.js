const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const initialState = {
  firstName: "Munisa",
  lastName: "Shavkatbekova",
  address: {
    street: "Bagrikenglik",
    numberOfHome: 59,
    province: {
      name: "Toshkent",
    },
  },
};

const FIX_BUG = "FIX_BUG";

function fixBug(data) {
  return {
    type: FIX_BUG,
    payload: data,
  };
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FIX_BUG:
      return produce(state, (draft) => {
        draft.address.province.name = payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(fixBug("Fargona"));
unsubscribe();
