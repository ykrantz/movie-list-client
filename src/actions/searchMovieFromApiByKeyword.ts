import { movieListType } from "../types/types";


const axios = require("axios");


// const formolizeStrintToURL=(str:string):string=>{
//     const strSplitToWords:string[]= str.split(" ")
//     const strFormolized= strSplitToWords.join("%20")
//     console.log({strFormolized});
//     return strFormolized


// }

// const searchMovieFromApi=(str:string):any=>{
const searchMovieFromApiByKeyword=(str:string|undefined):movieListType=>{

// const textToSearch:string= formolizeStrintToURL(str);
// console.log({textToSearch});

// let moviesList: object[]|object={};

console.log("serachingg for", {str});

    // const options = {
    //     method: 'GET',
    //     url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${str}`,
    //     params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
    //     headers: {
    //       'X-RapidAPI-Key': '40753c6082msh6d9d419e1a62c93p1b3943jsn9c7ef6262732',
    //       'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //     }
    //   };
      const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${str}`,
        params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
        headers: {
          'X-RapidAPI-Key': '40753c6082msh6d9d419e1a62c93p1b3943jsn9c7ef6262732',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      return  axios.request(options).then(function (response:any) {
          console.log(response.data);
          return response.data;
          
        
      }).catch(function (error:any) {
          console.error(error);
      });


}




export default searchMovieFromApiByKeyword