import { movieListType } from "../types/types";

// max LIMIT of movie number is 50
const LIMIT_NUM_MOVIES = 50 ;
const axios = require("axios");
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

// const formolizeStrintToURL=(str:string):string=>{
//     const strSplitToWords:string[]= str.split(" ")
//     const strFormolized= strSplitToWords.join("%20")
//     console.log({strFormolized});
//     return strFormolized


// }

// const searchMovieFromApi=(str:string):any=>{
const searchMovieFromApi=(str:string|undefined):movieListType=>{

// const textToSearch:string= formolizeStrintToURL(str);
// console.log({textToSearch});

// let moviesList: object[]|object={};

console.log("serachingg for", {str});
console.log(process.env.REACT_APP_S3_BUCKET,55,process.env.REACT_APP_RAPID_API_MOVIES_DATABASE_KEY)

    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${str}`,
        params: {info: 'mini_info', limit: LIMIT_NUM_MOVIES, page: '1', titleType: 'movie'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_MOVIES_DATABASE_KEY,
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




export default searchMovieFromApi