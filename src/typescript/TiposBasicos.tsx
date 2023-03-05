export const BasicTypes = () => {

    const name: string | number = 'Xavier';
    const age: number = 35;
    const active: boolean = false;

    // Array of elemenents of any (mixed) type.
    const anyPowers = [];

    // Array of strings.
    const superPowers: string[] = ['flight', 'immortal', 'invisible', 'magic', 'psychic', 'psychokinesis', 'telepathy', 'teleport'];
    
    // Array of strings and numbers.
    const randomPowers: (string | number)[] = [];

  return (
    <div className="mt-2">
        <h3>Basic Types</h3>
        {name}, {age}, {(active) ? 'IS active' : 'IS NOT active'}
      <br/>
      {superPowers.join(', ')}
    </div>
  )
}
