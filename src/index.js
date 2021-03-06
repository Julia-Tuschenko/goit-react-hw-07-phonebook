import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import  { store }  from './redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/index';


const root = createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename ="/goit-react-hw-07-phonebook/"> 
            <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
)

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//         <BrowserRouter basename ="/goit-react-hw-07-phonebook/"> 
//             <App />
//         </BrowserRouter>
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
