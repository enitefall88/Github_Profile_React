import React, {useEffect} from "react";

function App() {
  useEffect(() => {
    let interval
    if(running) {
     interval = setInterval(() => {
      setTimeLeft(count => count - 0.1)
    }, 500)
      return () => {
      clearInterval(interval)
      }
  }}, [running])
})

  return <div>

    </div>
}

export default App;
