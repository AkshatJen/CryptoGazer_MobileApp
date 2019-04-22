const url =
  "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=2f82c84de8be4a3281d7fd64be72b906";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}