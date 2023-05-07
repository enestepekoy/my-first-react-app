import { useState } from "react"

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    // Initialize the state with the grouped employees' data
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    // Function to group employees by their respective teams
    function groupTeamMembers() {

        // Create an array to store the teams
        let teams = [];

        // Filter the employees who belong to TeamA and create a team object with members, team name, and collapsed status
        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
        teams.push(teamA);

        // Doing the same with TeamB and other ones.
        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
        teams.push(teamD);

        // Return the array of teams
        return teams;
    }

    return (
        <main className="container">
            {groupedEmployees.map((item) => {
                // Render a card for each team
                return (
                    <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
                        <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              // Display team name and make the header clickable to expand/collapse the card
                            Team Name: {item.team}
                        </h4>
                        <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                            <hr />
                            {item.members.map((member) => {
                                // Render a card for each member of the team
                                return (
                                    <div key={member.id} className="mt-2">
                                        <h5 className="card-title mt-2">
                                            <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                                        </h5>
                                        <p className="card-text text-dark mt-2">
                                            <b>Designation:</b> {member.designation}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <hr />
                    </div>
                );
            })}
        </main>
    )
}

export default GroupedTeamMembers