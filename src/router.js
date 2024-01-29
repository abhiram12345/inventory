import {createHashRouter} from 'react-router-dom';
import Home from './pages/HomePage';
import AddItem from './pages/AddItem';
import Main from './components/Main';
import ItemView from './pages/ItemView';
import ManageItems from './pages/ManageItems';

const router = createHashRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'add-item',
                element:<AddItem/>
            },
            {
                path:'item/:itemId',
                element:<ItemView/>
            },
            {
                path:'/manage',
                element:<ManageItems/>
            }
        ]
    }
]);

export default router;