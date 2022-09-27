import React from 'react'

import { useState } from 'react'
import { TodoList, ListItem } from './components'

interface TodoListItem {
  text: string
  completed: boolean
}

let listItems: TodoListItem[] = []

const App = () => {
  const [itemText, setItemText] = useState('')

  const addNewListItem = (): void => {
    listItems.push({ text: itemText, completed: false })
    setItemText('')
  }
  const removeListItem = (currentItemText: string) : void => {
    listItems = listItems.filter(item => item.text !== currentItemText)
  }

  return (
    <div style={{ margin: '20px auto', width: '800px' }}>
      <TodoList>
        {listItems.map((item) => {
          return (
            <div style={{ display: 'flex', gap: '40px', marginBottom: '10px'}}>
              <p className="item">{item.text}</p>
              <button
                onClick={() => removeListItem(item.text)}
                style={{ width: '50px', fontSize: '1.25rem' }}>
                -
              </button>
            </div>
          )
        })}
      </TodoList>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          style={{ width: '250px', height: '35px' }}
          type={'text'}
          name={'listItem'}
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
        />
        <button onClick={addNewListItem} style={{ width: '65px', fontSize: '2rem' }}>
          +
        </button>
      </div>
    </div>
  )
}

export default App
