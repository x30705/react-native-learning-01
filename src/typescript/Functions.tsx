export const Functions = () => {

    // TypeScript Function.

    const sum = (a: number, b: number): number => {
        return a + b;
    }

  return (
    <>
        <h3>Functions</h3>
        <span>Sum result is: {sum(3, 8)}</span>
    </>
  )
}
