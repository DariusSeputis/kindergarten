const HOST = 'http://localhost:5000';

const useEndpoint = (type) => {
  switch (type) {
    case 'signup':
      return `${HOST}/users/signup`;
    case 'login':
      return `${HOST}/users/login`;
    default:
      return HOST;
  }
};

export default useEndpoint;
