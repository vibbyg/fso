const PersonForm = ({ newName, newNumber, handleNewName, handleNewNumber, handlePersonAdd }) => {

    return (
        <form>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit" onClick={handlePersonAdd}>add</button>
        </div>
      </form>
    )
}

export default PersonForm;