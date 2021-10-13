// import { createContext, useContext } from 'react';
// import './App.css';
import Header from './Header/Header';
import Home from "./Home/home"
// const filter = (state, action) => {
//   switch (action.type) {
//     case 'loggedIn':
//       console.log(state, action)
//       return { token: state.token }
  
//     default:
//       throw new Error();
//   }
// }
// export const StateContext = createContext(null);

function App() {
  // const [ state, dispatch ] = useContext(filter, {username: '', token: ''})
  
  return (
    // <StateContext.Provider value={dispatch} >
    <div>
      <Header/>
    <Home/>
    </div>
    // </StateContext.Provider>
  );
}

export default App;
