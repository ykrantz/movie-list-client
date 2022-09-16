import { movieListType } from "../types/types"

const filterMovieList =(movieListResults:movieListType):movieListType=>{
    return movieListResults.filter(movieDetails=>movieDetails?.primaryImage)

}

export default filterMovieList