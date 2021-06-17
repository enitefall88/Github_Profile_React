import React, {useState, useEffect} from "react"

import {makeApiClient} from "./Lib/api"
let apiClient = makeApiClient("https://api.github.com")
// 5.6, 5.7, 5.8

function useFetch(apiClient, url) {
  let [data, setData] = useState(null)
  let [loading1, setLoading1] = useState(true)
  let [loading2, setLoading2] = useState(true)
  let [error, setError] = useState(null)
  let [repos, setRepos] = useState(null)

  //useEffect1 - loading1
  useEffect(_ => {
    apiClient.fetchJSON(url)
      .then(data => {
        setData(data)
        setLoading1(false)
      })

  }, [])

  //useEffect2 - loading2
  useEffect(_ => {
    apiClient.fetchJSON("/users/enitefall88/repos?sort=created&per_page=3")
      .then(repos => {
        setRepos(repos)
        setLoading2(false)
      })

  }, [])
  return {data, loading1, loading2, error, repos}
}

export default function App() {
  let {data, loading1, loading2, error, repos} = useFetch(apiClient, "/users/enitefall88")


  if (error) {
    return <Error error={error}/>
  }

  if (loading1 || loading2) {
    return <Loading/>
  }
  return <div className="p-3">
    <h1 className="h3">GitHub Profile</h1>
    <img width="150px" src={data.avatar_url}/>
    <h2 className="h4">
      {data.name}
    </h2>
    <p>
      {data.bio}
    </p>
    {repos.map(repo => {
      return <ul key={repo.id}>
        <li>
          <h4 className="h5"><a href={repo.html_url}>{repo.name}</a> ★ {repo.stargazers_count}</h4>
        </li>
        </ul>
        })}
    <pre className="p-3" style={{background: "gray", color: "white"}}><code>
      {JSON.stringify(data, null, 2)}
    </code></pre>
  </div>
}


function Loading() {
  return <span>Loading...</span>
}

function Error({error}) {
  return <span>{String(error)}</span>
}
