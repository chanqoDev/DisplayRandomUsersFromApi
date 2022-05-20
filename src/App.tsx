import * as React from "react";
import "./App.css";
import FetchRandomData from "./FetchRandomData";

const { useEffect, useState } = React;
//https://randomuser.me/api/

interface UserName {
  first: string;
  last: string;
  title: string;
}

interface UserInfo {
  name: UserName;
  picture: UserPicture;
}

interface UserPicture {
  thumbnail: string;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
  const [userInfos, setUserInfos] = useState<any>([]);

  const getFullUserName = (userInfo: UserInfo) => {
    const {
      name: { first, last },
    } = userInfo;
    return `${first} ${last}`;
  };

  useEffect(() => {
    FetchRandomData().then((randomData) => {
      setRandomUserDataJSON(
        JSON.stringify(randomData, null, 2) || "No userdata found"
      );
      setUserInfos(randomData.results);
    });
  }, []);

  return (
    <div className="App">
      <h1> Hello Sample </h1>
      <p> {counter}</p>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increase Counter{" "}
      </button>
      {userInfos.map((userInfo: UserInfo, idx: number) => (
        <div key={idx}>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail} alt={"Person Mugshot"} />
        </div>
      ))}
      <pre>{randomUserDataJSON}</pre>
    </div>
  );
}

export default App;
