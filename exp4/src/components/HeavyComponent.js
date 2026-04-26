export default function HeavyComponent({ num }) {
  console.log("Heavy calculation running...");

  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }

  return <h2>Result: {result}</h2>;
}