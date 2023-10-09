import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    // received new property from App.jsx
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault() // prevent page from refreshing / rerendering
        if (newItem === "") return
    
        onSubmit(newItem)
    
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item" />
          {/* onChange was cahnged for every key, value is the input value set */}
        </div>
        <button className="btn">Add</button>
      </form>
    )
}