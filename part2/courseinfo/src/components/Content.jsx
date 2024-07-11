import Part from "./Part";
import Total from './Total';

const Content = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <div>
        {parts.map( part => {
            return (<Part key={part.id} part={part} />)
        })}
        <Total total={total} />
        </div>
    )
}

export default Content;