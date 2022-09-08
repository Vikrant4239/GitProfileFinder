import React, { useState } from "react";

function Profile() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});
  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        // console.log(value);
        setData(value);
      });
  };
  return (
    <>
      <div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <form action="" onSubmit={onSubmitHandler}>
          <div>
            <input className="ip"   type="text" value={userName} onChange={onChangeHandler} />
          </div>
          <div>
            <button className="btn">SEARCH</button>
          </div>
        </form>
      </div>

      <div className="contain">
        <div className="image">
          <p>Avatar</p>
          <img src={data.avatar_url} width="100" alt="" />
          
        </div>
        <div className="uname">
          <p>USERNAME</p>
          {data.login}
        </div>
        <div className="name">
          <p>NAME</p>
          {data.name}
        </div>
        <div className="repos">
          <p>NO. OF REPOS</p>
          {data.public_repos}
        </div>
        <div className="gist">
          <p>GISTS</p>
          {data.public_gists}
        </div>
        <div className="profilecreated">
          <p>LANDED</p>
          {data.created_at}
        </div>
      </div>
    </>
  );
}

export default Profile;
