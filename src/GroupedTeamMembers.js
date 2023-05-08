import { useState } from "react"

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    // Initialize the state with the grouped employees' data
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    // Function to group employees by their respective teams
    function groupTeamMembers() {
        // Initialize an array to store the teams
        const teams = [];

        // Create a team object for each team
        const teamNames = ['TeamA', 'TeamB', 'TeamC', 'TeamD'];
        teamNames.forEach((teamName) => {
            // Filter employees by team and create a team object with members, team name, and collapsed status
            const teamMembers = employees.filter((employee) => employee.teamName === teamName);
            const isCollapsed = selectedTeam === teamName ? false : true;
            const teamObject = { team: teamName, members: teamMembers, collapsed: isCollapsed };
            teams.push(teamObject);
        });

        return teams;
    }

    function handleTeamClick(event) {
        const teamName = event.currentTarget.id;

        // Update the grouped data by mapping over each team and toggling the collapsed state for the clicked team
        const newGroupedData = groupedEmployees.map(groupedData => {
            if (groupedData.team === teamName) {
                return { ...groupedData, collapsed: !groupedData.collapsed };
            }
            return groupedData;
        });

        // Update the state with the new grouped data and the clicked team name
        setGroupedData(newGroupedData);
        setTeam(teamName);
    }

    return (
        // Render a container for the team cards
        <main className="container">
            {groupedEmployees.map((item) => {
                // Render a card for each team
                return (
                    <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
                        {/* Render a header for the team card with the team name */}
                        <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                            Team Name: {item.team}
                        </h4>
                        {/* Render a collapsible section for the team members */}
                        <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                            {/* Render a horizontal rule */}
                            <hr />
                            {item.members.map((member) => {
                                // Render a card for each member of the team
                                return (
                                    <div key={member.id} className="mt-2">
                                        {/* Render a title for the team member card with the member's full name */}
                                        <h5 className="card-title mt-2">
                                            <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                                        </h5>
                                        {/* Render a text for the team member card with the member's designation */}
                                        <p className="card-text text-dark mt-2">
                                            <b>Designation:</b> {member.designation}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Render a horizontal rule */}
                        <hr />
                    </div>
                );
            })}
        </main>
    )
}
export default GroupedTeamMembers