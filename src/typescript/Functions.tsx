export const Functions = () => {

    // Incorrect for TypeScript, correct for JavaScript: a and b are of type any.
    
    const sum = (a, b) => {
        return a + b;
    }

  return (
    <>
        <h3>Functions</h3>
        <span>Sum result is: {sum(3, 4)}</span>
    </>
  )
}
