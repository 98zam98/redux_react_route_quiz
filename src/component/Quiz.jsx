import Missing from './Missing';
import Question from './Question';
import { Route , Routes } from "react-router-dom";

const Quiz = () => {
  return (
    
    <Routes>
        <Route>
          <Route index element={<Missing />}/>
          <Route path=':id' element={<Question />}  />
        </Route>
    </Routes>
  )
}

export default Quiz