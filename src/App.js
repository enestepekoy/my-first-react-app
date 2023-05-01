import logo from './logo.svg';
import './App.css';
import './styles.css';
import Footer from'./Footer';
import Header from './Header';
import Employees from './Employees';
import Counter from './Counter';
import { useState, useEffect } from "react";



function App() {
  // const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) [I Hi
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");
    
  const [employees, setEmployees] = useState([
      {
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Fatih Tepeköy",
    designation: "Java Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 3,
    fullName: "Alice Smith",
    designation: "Python Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 4,
    fullName: "John Doe",
    designation: "PHP Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 5,
    fullName: "Jane Lee",
    designation: "UI/UX Designer",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "David Kim",
    designation: "Full-stack Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 7,
    fullName: "Enes Tepeköy",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Maria Hernandez",
    designation: "Front-end Developer",
    gender: "female",
    teamName: "TeamD"
  },
  {
    id: 9,
    fullName: "Ethan Chen",
    designation: "Backend Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 10,
    fullName: "Samantha Davis",
    designation: "UI/UX Designer",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 11,
    fullName: "William Johnson",
    designation: "Full-stack Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 12,
    fullName: "Linda Kim",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamD"
  }
    ]);
    
    useEffect(() =>{

      localStorage.setItem('employeeList', JSON.stringify(employees));

    },[employees]);

    useEffect(() =>{

      localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

    },[selectedTeam]);
    
    function handleTeamSelectionChange(event) {
      setTeam(event.target.value);
    }
    
    function handleEmployeeCardClick(event) {
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                                ?(employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}
                                                :employee);
      setEmployees(transformedEmployees);
    }
    

  return(
    <div>
      <Header selectedTeam={selectedTeam}
              teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <Footer/>
      <Counter/>
    </div>
    
  );
   
      
}
export default App;
