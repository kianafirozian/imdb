import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

// in order to use ssr fetching we need to change our function to async which is possible in next 13 and above

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  console.log("genre---", genre);
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  const results = data.results;

  if (!res.ok) {
    throw new Error("Failed to Fetch data");
  }

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
