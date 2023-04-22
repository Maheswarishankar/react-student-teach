
import './App.css';
import Addusers from './StuComponents/Addusers';
import Usercomponents from './StuComponents/UserComponents';
import { Route, Switch } from 'react-router-dom';
import Nopage from './StuComponents/Nopage';
import StudentDetails from './StuComponents/StudentDetails';
import Editusers from './StuComponents/Editusers';
import TeachUsercomponents from './TeacherComponents/TeachUsercomponents';
import Dashboard from './Dashboard';
import AddTeacher from './TeacherComponents/AddTeacher';
import EditTeacher from './TeacherComponents/EditTeacher';
import TeacherDetails from './TeacherComponents/TeacherDetails';




function App() {
 
  return (
    <div className="App"> 

    <Switch>
     
      <Route exact path="/">
      <Usercomponents/>            
      </Route>
      <Route  path="/home">
      <Dashboard/>                   
      </Route>
      
      <Route path="/students">
        <Usercomponents/>
      </Route>

      <Route path="/teacher">
        <TeachUsercomponents/>
      </Route>

      <Route path="/add/user">
      <Addusers/>  
      </Route>

      <Route path="/add/teacher">
        <AddTeacher/>
      </Route>


      <Route path="/edit/:id">
      <Editusers />  
      </Route>

      <Route path="/editteacher/:id">
        <EditTeacher/>
      </Route>

      <Route path = "/user/:id">      
      <StudentDetails/>
      </Route>

      <Route path = "/viewteacher/:id">      
      <TeacherDetails/>
      </Route>

      {/* <Route path = "/studentsrecords">      
      <Redirect path = "/"/>
      </Route> */}

      <Route path="**">
      <Nopage/>     
      </Route>      
      
      </Switch> 
      

     

      
    </div>
  );
}

export default App;
