import axios from 'axios';

export async function fetchUsers(value) {
  const result = await axios.get('https://api.github.com/search/users', {
    params: {
      q: value,
      per_page: 100,
    }
  });
  return result?.data?.items;
}
