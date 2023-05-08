import logo from './logo.svg';
import './App.css';
import './styles.css';
import Footer from './Footer';
import Header from './Header';
import Employees from './Employees';
import Counter from './Counter';
import GroupedTeamMembers from './GroupedTeamMembers';
import NotFound from './NotFound';
import Nav from './Nav';
import TeamMemberCard from './TeamMemberCard';
import TeamMembers from './TeamMembers';
import Teams from './Teams';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
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

  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees));

  }, [employees]);

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }



  function handleEmployeeCardClick(event) {
    const clickedEmployeeId = parseInt(event.currentTarget.id);
    const transformedEmployees = employees.map((employee) => {
      if (employee.id === clickedEmployeeId) {
        const isAlreadySelected = employee.teamName === selectedTeam;
        return { ...employee, teamName: isAlreadySelected ? '' : selectedTeam };
      }
      return employee;
    });
    setEmployees(transformedEmployees);
  }


  return (
    <Router>
      <Nav />
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
      <Routes>
        <Route path='/'
          element={<Employees employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />}>
        </Route>
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}>
        </Route>
        <Route path='*' element={<NotFound />}>
        </Route>
      </Routes>
      <Footer />
      <Counter />
    </Router>


  );


}
export default App;
