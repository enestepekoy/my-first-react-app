import logo from './logo.svg';
import './App.css';
import './styles.css';
import Footer from'./Footer';
import Header from './Header';
import Employees from './Employees';
import Counter from './Counter';



function App() {
  // const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) [I Hi
    

  return(
    <div>
      <Header/>
      <Employees/>
      <Footer/>
      <Counter/>
    </div>
    
  );
   
      
}
export default App;
