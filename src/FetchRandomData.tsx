import axios from "axios";
// Make a request for a user with a given ID
const FetchRandomData = () => {
  return axios
    .get("https://randomuser.me/api/")
    .then((res) => {
      // handle success
      console.log(res);
      return res;
    })
    .catch((err) => {
      // handle error
      console.error(err);
    })
    .then(() => {
      // always executed
    });
};

export default FetchRandomData;
