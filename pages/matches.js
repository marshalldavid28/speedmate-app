const matches = [
  { name: "Alex", sharedInterest: "Technology" },
  { name: "Jamie", sharedInterest: "Books" },
];

export default function Matches() {
  return (
    <div>
      <h1>Your Matches</h1>
      {matches.length === 0 ? (
        <p>No matches found yet!</p>
      ) : (
        <ul>
          {matches.map((match, index) => (
            <li key={index}>
              {match.name} - Shared Interest: {match.sharedInterest}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
