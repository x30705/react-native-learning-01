interface Person{

    // Use an interface to tell TypeScript how an object looks like.

    name: string;
    age: number;

    // Prefer tu create another interface for nested objects.

    address: {
        country: 'Canada',
        house: number
    };

    spaceship: Spaceship;

    // Interfaces cannot be used to create instances like:
    // const person = new Person();
    // Only for stablishing validation roules to objects. (You should use a class instead).
}

interface Spaceship{
    model: String;
    serial: number;
}

export const LiteralObjects = () => {

    // Literal Objects does not have a literal representation in HTML.
    // With TypeScript, this person object cannot change (add, remove) its attributes.
    
    const person: Person = {
        name: 'Xavier',
        age: 35,
        address: {
            country: 'Canada',
            house: 615
        },
        spaceship: {
            model: 'A897',
            serial: 934802340
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
