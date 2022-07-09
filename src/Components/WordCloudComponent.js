import axios from 'axios';
import React from 'react';

// const WordCloud = async (user_id) => {
//     const url = "http://127.0.0.1:8000/wordcloud/" + user_id
//     await axios.get(url)
//       .then((response) => {
//         console.log('wordcloud response---******************************************************', response)
//         const words_dict = response['data']['data'];
//         var words = [];
//          Object.entries(words_dict).forEach(([k, v]) => {
//           words.push({ value: k, count: v });
//         });
//         // this.setState({ data: words });
//         return words;


//       }).catch(error => {
//         console.log('invalid user', error);
//         return [];
//       });
// }

const WordCloud = (user_id) => {
  const url = "http://127.0.0.1:8000/wordcloud/" + user_id
  const data = axios.get(url)
    .then((response) => {
      console.log('wordcloud response---******************************************************', response)
      const words_dict = response['data']['data'];
      var words = [];
       Object.entries(words_dict).forEach(([k, v]) => {
        words.push({ value: k, count: v });
      });
      // this.setState({ data: words });
      return words;
    }).catch(error => {
      console.log('invalid user', error);
      return [];
    });

  return data;

}
  

export default WordCloud;

