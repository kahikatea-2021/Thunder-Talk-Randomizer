import React, { useState } from 'react'

import { createRandomList } from './appHelper'

import Header from './Header'

function App (props) {
  const [humans, setHumans] = useState(['Jared', 'Sam', 'Ulysses'])
  const [list, setList] = useState([])
  const [formEntry, setFormEntry] = useState([])

  function randomise () {
    setList(createRandomList(humans))
  }

  function handleChange (event) {
    setFormEntry(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    setHumans([
      ...humans,
      formEntry
    ])
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
      <div className='app-container'>
        <Header />
        {/* Lists */}
        <div className='body-container'>
          <div className='list-container'>
            <div className='list-form'>
              <form onSubmit={handleSubmit}>
                <label>Add a name:</label>
                <input className='input-box' type='text' name='name' onChange={handleChange} />
                <input className='submit-button' type='submit' value='Submit' />
              </form>
            </div>
            <div className='list-names'>
              <h1>List of Humans</h1>
              <ul>
                {humans.map(human => (
                  <><li key={human}><button className={human} onClick={handleDelete}>x</button>  {human}</li></>
                ))}
              </ul>
            </div>
          </div>
          <div className='randomiser-container'>
            <button className='randomise-button' onClick={randomise}>Randomise</button>
            <div>
              <h1>Random Humans</h1>
              <ul>
                {list.map(person => (
                  <div key={person}>{person}</div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
