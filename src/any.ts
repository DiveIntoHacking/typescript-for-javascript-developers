import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

interface Article {
  id: number;
  title: string;
  description: string;
}

axios.get<Article[]>(url).then(function(response) {
  interface MyArticle {
    id: number;
    title: number;
    description: string;
  }
  let data: MyArticle[];
  response.data;
  data = response.data;
  console.log(data);
});
