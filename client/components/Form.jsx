import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { noDuplicates } from './appHelper'

function Form (props) {
  const [humans, setHumans] = useState([])
  const [formEntry, setFormEntry] = useState([])

  function handleChange (event) {
    setFormEntry(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (noDuplicates(formEntry, humans)) {
      setHumans([
        ...humans,
        formEntry
      ])
    } else {
      window.confirm('This name already exists on the list! Please enter a unique name.')
    }
    event.target.reset()
  }

  const handleDelete = (event) => {
    const name = event.target.className
    const index = humans.indexOf(name)
    const array = humans

    array.splice(index, 1)
    setHumans([...array])
  }

  return (
    <>
      <div className='list-container'>
        <div className='list-form'>
          <form onSubmit={handleSubmit}>
            <label>Add a name:</label>
            <input className='input-box' type='text' name='name' onChange={handleChange} required />
            <input className='submit-button' type='submit' value='Add' />
          </form>
        </div>
        <div className='list-names'>
          <h1>List of Humans</h1>
          <Link
            to={{
              pathname: '/random',
              state: { list: humans }
            }}>Submit List</Link>
          <ul>
            {humans.map(human => (
              <><li key={human}><button className={human} onClick={handleDelete}>x</button>  {human}</li></>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Form
