import { useState } from "react";
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';


const Employees = () => {

    const [selectedTeam, setTeam] = useState("TeamB");
    
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
        }
      ]);
    
      function handleTeamSelectionChange(event) {
        setTeam(event.target.value);
      }
      
      function handleEmployeeCardClick(event) {
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                                  ?(employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}
                                                  :employee);
        
      }


    return (
      <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
              <option value="TeamA">TeamA</option>
              <option value="TeamB">TeamB</option>
              <option value="TeamC">TeamC</option>
              <option value="TeamD">TeamD</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <div className="card-collection">
                {
                  employees.map((employee) => (
                    <div id={employee.id} className="card m-2" style={{ cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                      
                      {(employee.gender === 'male')?<img src={maleProfile} className="card-img-top" />
                                                   :<img src={femaleProfile} className="card-img-top" />}
                      
                      <div className="card-body">
                        <h5 className="card-title">Full Name: {employee.fullName}</h5>
                        <p className="card-text"><b>Designation</b> {employee.designation}</p>
                      </div>
                  </div>  
                ))
              }
            </div>
          </div>
        </div>
      </main>
    )


  }
export default Employees