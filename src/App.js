import {Header ,Footer,About,Missing, MainMenu, Quiz, EndScreen} from "./component";
import { useRoutes } from "react-router-dom";

function App() {
  let zRoutes = useRoutes([
    {
      path:'/' ,
      element:<MainMenu />
    },
    {
      path:'/About' ,
      element:<About />
    },
    {
      path:'/Quiz/*' ,
      element:<Quiz />
    },
    {
      path:'/EndScreen' ,
      element:<EndScreen />
    },
    {
      path:'*' ,
      element:<Missing />
    }
  ]);

  return (
    <div className='App' >
      
      <Header />
        {zRoutes}
    <Footer />
    </div>
  );
}

export default App;
