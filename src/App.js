import React, {useEffect} from "react";

console.log(fetch)

function App() {
  fetch("http://api.github.com/users/ivan-kleshnin")
      .then(resp => {
            resp.json()
      .then(data => console.log(data))
          }
      )


   return <div className="p-3">
    <h1 className="h3">GitHub Profile</h1>
    <img width="150px" src={user.avatar_url}/>
    <h2 className="h4">
      {user.name}
    </h2>
    <p>
      {user.bio}
    </p>
    <pre className="p-3" style={{background: "gray", color: "white"}}><code>
      {JSON.stringify(user, null, 2)}
    </code></pre>
  </div>
}

function Loading() {
  return <span>Loading...</span>
}

export default App;
