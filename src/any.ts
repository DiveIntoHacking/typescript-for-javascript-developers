import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// https://github.com/axios/axios#request-config
// にconfigに設定可能なパラメータの説明があります。
// 説明に記載の通り、urlのみ必須のパラメータのようです。
// 以下はサンプルです。適宜、使用されているproxyのhost、portに書き換えて使用してください。
// 認証情報authも必要であればREADMEを参照しながら追加してください。
const config = {
  url,
  proxy: {
    host: '127.0.0.1',
    port: 8080
  }
};

axios.get(url, config).then(function(response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  console.log(data);
});
