import React from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form>
      <lable htmlFor='addItem'>Add item</lable>
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add item...'
        required
        // value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type='submit'>Add item</button>
    </form>
  )
}

export default AddItem