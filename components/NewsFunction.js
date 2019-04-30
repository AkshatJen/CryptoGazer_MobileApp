const url =
  "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=2f82c84de8be4a3281d7fd64be72b906";

const nurl = 
'https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-29&sortBy=publishedAt&apiKey=2f82c84de8be4a3281d7fd64be72b906';

const uri = 'https://newsapi.org/v2/everything?q=cryptocurrency&q=bitcoin&sortBy=publishedAt&apiKey=2f82c84de8be4a3281d7fd64be72b906';


export async function getNews() {
  let result = await fetch(uri).then(response => response.json());
  return result.articles;
}