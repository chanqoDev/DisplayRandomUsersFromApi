import axios from "axios";
// Make a request for a user with a given ID
const FetchRandomData = () => {
  return axios
    .get("https://randomuser.me/api/")
    .then(({ data }) => {
      // handle success
      console.log(data);
      return JSON.stringify(data);
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
};

export default FetchRandomData;
