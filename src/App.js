
import './App.css';
import Home from './routes/Home.js';
import Journey from './routes/journey.js';
import Mission from './routes/Mission.js';
import Program from './routes/program.js';
import {  createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './Nav';


const  Layout = ()=>{
  return(
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
const routes= createBrowserRouter([
  {
     path:"/", element:<Layout/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/journey",element:<Journey/>},
      {path:"/Mission",element:<Mission/>},
      {path:"/program",element:<Program/>}
    ] 
  }
]);

function App() {
  
  return (
    <div>
    <RouterProvider router={routes}/>
    {/*<Routes>
            <Route path="/" element={<Layout/>}
      children:[
        {path:"/",element:<Home/>},
        {path:"/journey",element:<Journey/>},
        {path:"/Mission",element:<Mission/>},
        {path:"/program",element:<Program/>}
      ]/>
<Route path="/journey" element={<Journey/>}/>
      <Route path="/Mission" element={<Mission/>}/>
  <Route path="/program" element={<Program/>}/>
    </Routes>*/}
    
    </div>
  );
}

export default App;
