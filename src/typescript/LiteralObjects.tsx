import { json } from "stream/consumers"

export const LiteralObjects = () => {
    
    // Literal Objects does not have a literal representation in HTML.
    // With TypeScript, this person object cannot change (add, remove) its attributes.
    const person = {
        name: 'Xavier',
        age: 35,
        address: {
            country: 'Canada',
            number: 615
        }
    }

  return (
    <div>
        <h3>Literal Objects</h3>
        <code>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </code>
    </div>
  )
}
