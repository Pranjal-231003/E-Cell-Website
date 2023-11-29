


const TeamCard = ({ name, title, photo }) => {
  return (
    <div className="team-card">
      <img src={photo} alt={name} className="team-photo" />
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-title">{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
