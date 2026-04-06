import axios from 'axios';

const fetchGithubUser = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/1');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch GitHub user data.');
  }
};

export { fetchGithubUser };