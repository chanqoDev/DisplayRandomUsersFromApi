import axios from "axios";
// Make a request for a user with a given ID
const FetchRandomData = (pageNumber: number) => {
  // ?page=2
  return axios
    .get(`https://randomuser.me/api?=${pageNumber}`)
    .then(({ data }) => {
      // handle success
      return data;
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
};

export default FetchRandomData;
