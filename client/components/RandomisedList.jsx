import React from 'react'

import { createRandomList } from './appHelper'

function RandomisedList (props) {
  const list = createRandomList(props.location.state.list)
  return (
    <>
      <div className='body-container'>
        <h1>Random Humans</h1>
        <ul>
          {list.map(person => (
            <div key={person}>{person}</div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RandomisedList
