export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <p>{result.original_title}</p>
        </div>
      ))}
    </div>
  );
}
// in all mappings if we open {} we should *return* the div inside but we if open () we doesn't need curly braces
