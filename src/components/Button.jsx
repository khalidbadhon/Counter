export default function Button({ increment, decrement, reset }) {
  return (
    <div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button
        style={{
          backgroundColor: '#feff00',
        }}
        onClick={reset}>
        Reset value
      </button>
    </div>
  );
}
