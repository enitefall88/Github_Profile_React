import React, {useEffect} from "react";

console.log(fetch)

function App() {
  fetch("http://api.github.com/users/ivan-kleshnin")
      .then(resp => {
            resp.json()
      .then(data => console.log(data))
          }
      )


  return <div>

  </div>
}

export default App;
