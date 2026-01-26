import PropTypes from 'prop-types';
import useGithub from '../hooks/useGithub';
const GithubUser = ({ username }) => {
  const { userData, loading, error } = useGithub(username);
  return (
    <div className='github-user'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            width='100'
          />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target='_blank' rel='noopener noreferrer'>
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

GithubUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GithubUser;
