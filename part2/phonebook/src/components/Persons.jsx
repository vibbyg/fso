import Person from "./Person";

const Persons = ({ persons, handlePersonDelete }) => {
    return (
        <div>
            {persons.map(person => 
            <Person key={person.id} person={person} onDelete={() => {handlePersonDelete(person.name, person.id)}}/>
            )}
        </div>
    )
}

export default Persons;