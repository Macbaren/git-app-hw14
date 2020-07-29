import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Head from './head'

const InputForm = () => {
  const [userName, setUserName] = useState()
  const getUser = (e) => {
    setUserName(e.target.value)
  }
  const history = useHistory()
  const confirmName = () => {
    history.push(`/${userName}`)
  }

  const clearInput = () => {
    document.getElementById('inputuser').value = ''
  }

  return (
    <div>
      <Head />
      <div className="bg-teal-700 text-center py-4 lg:px-4">
        <div
          className="p-2 bg-teal-800 items-center text-teal-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-teal-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span>
          <span className="font-semibold flex-auto">
            Try the coolest Github users readme searcher from Macbaren
          </span>
        </div>
      </div>
      <form className="w-full max-w-sm p-auto m-auto">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            id="inputuser"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter Git User name"
            aria-label="Full name"
            onChange={getUser}
            onKeyPress={(e) => {
              if (e.key === 'Enter') confirmName()
            }}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={confirmName}
          >
            Search
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button"
            onClick={clearInput}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

InputForm.propTypes = {}

export default React.memo(InputForm)
