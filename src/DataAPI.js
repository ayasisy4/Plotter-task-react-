
const api = "https://plotter-task.herokuapp.com"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllColumns = () =>
fetch(`${api}/columns`, { headers })
  .then(res => res.json())
     

export const getData = (query) =>
fetch(`${api}/data`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify( query )

}).then(res => res.json())
  // .then(data => data)
