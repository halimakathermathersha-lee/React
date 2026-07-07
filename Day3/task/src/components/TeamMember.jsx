import "./TeamMember.css";
import profile from "../assets/hero.png";
import NetflixCard from "./NetflixCard";

function TeamMember() {

  const team = [
    {
      id: 1,
      img: profile,
      name: "Halima",
      designation: "Frontend Developer",
    },
    {
      id: 2,
      img: profile,
      name: "John",
      designation: "UI Designer",
    },
    {
      id: 3,
      img: profile,
      name: "Maria",
      designation: "React Developer",
    },
    {
      id: 4,
      img: profile,
      name: "David",
      designation: "Backend Developer",
    },
  ];

  return (<>
    <div className="team-container">
      {team.map((member) => (
        <div className="team-card" key={member.id}>
          <img src={member.img} alt={member.name} className="team-img" />
          <h2>{member.name}</h2>
          <p>{member.designation}</p>
        </div>
      ))}
    </div>
    <NetflixCard/>
    </>
  );
}

export default TeamMember;