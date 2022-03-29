import PropTypes from "prop-types";

const Profile = (props) => {
  const handleName = () => {
    alert(props.name);
  };

  return (
    <div onClick={ handleName }>
      <h3>Name: { props.name }</h3>
      {props.children}
      <h4>Profession: { props.profession }</h4>
      <p>Bio: { props.bio }</p>
    </div>
  );
  }
export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  profression: PropTypes.string,
  children: PropTypes.element,
};