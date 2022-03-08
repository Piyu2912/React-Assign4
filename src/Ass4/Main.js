import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Head from './Head'
import { ContactUS } from './ContactUS'
import Student from './Student'
import PageNotFound from './PageNotFound'
import Studentadd from "./Studentadd";
import { StudData } from "./StudContext";

function Main() {
  return (
    <StudData>
      <div className="App">
        <Router>
          <Head />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/student-add' element={<Studentadd />} />
            <Route path="/student-add/:id" element={<Studentadd />} />
            <Route path='/contact' element={<ContactUS />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </StudData>
  );
}

export default Main