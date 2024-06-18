import React from 'react'
import Movie from './components/Movie'

const App = () => {
   //객체배열
   const movies = [
    {id:'m1252',title:'인사이드아웃', year:'2023'},    
    {id:'m9652',title:'하이재킹', year:'2024'},    
    {id:'m9856',title:'탈주', year:'2025'},    
    {id:'m7845',title:'소나기', year:'2026'}, 
  ]

  const movieList = movies.map(movie=>{
    return(
      <Movie  key={movie.id} title={movie.title} year={movie.year}/>
    )
  })
  
  return (
    <div>
      <h1>영화리스트 출력하기-컴포넌트 활용</h1>
      <div>{movieList}</div>
    </div>
  )
}

export default App