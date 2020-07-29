import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Head from './head'

const ReadMeFIle = () => {
  const [readmeFile, setReadmeFIle] = useState('')
  const { username, filename } = useParams('')
  axios(`https://api.github.com/repos/${username}/${filename}/readme`)
    .then((list) => list.data)
    .then((data) => setReadmeFIle(data.content))
    // eslint-disable-next-line no-alert
    .catch(() => alert('It looks like repo have no readme('))
  return (
    <div>
      <Head title="Readme file" />
      <div
        className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">
          This is {username} GitHub {filename} repository readme.md
        </p>
        <p className="text-sm">If you see nothing - repository have no readme.md file</p>
      </div>
      <div className="flex flex-col bg-green-200">
        <div className="text-gray-700 text-auto bg-yellow-100 px-4 py-2 m-2">
          <ReactMarkdown>{atob(readmeFile)}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

ReadMeFIle.propTypes = {}

export default React.memo(ReadMeFIle)
