import React, { useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import Head from './head'

const UserList = () => {
  const [userList, setUserList] = useState([])
  const { username } = useParams()
  const history = useHistory()
  axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((list) => setUserList(list.data))
    // eslint-disable-next-line no-alert
    .catch(() => alert('Github dont know this looser)'))

  return (
    <div>
      <Head title="GitHub Repositories" />
      <div
        className="flex row-auto bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 m-auto"
        role="alert"
      >
        <div>
          <p className="font-bold">This is {username} GitHub repositories</p>
          <p className="text-sm">For reaching README file click on the repository name</p>
        </div>
        <button
          className="ml-20 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={() => history.goBack()}
        >
          Back
        </button>
      </div>
      {/* what wrong with next code - memory leaks */}
      <div className="flex flex-col bg-indigo-200">
        {userList.map((it) => (
          <div
            className="text-gray-900 text-auto bg-yellow-200 px-4 py-2 m-2 rounded"
            key={it.name}
          >
            <Link to={`./${username}/${it.name}`}>{it.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

UserList.propTypes = {}

export default React.memo(UserList)
