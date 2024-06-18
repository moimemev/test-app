import React from 'react'

const App = () => {
  //객체배열
  const movies = [
    {id:'m1252',title:'인사이드아웃', year:'2023'},    
    {id:'m9652',title:'하이재킹', year:'2024'},    
    {id:'m9856',title:'탈주', year:'2025'},    
    {id:'m7845',title:'소나기', year:'2026'}, 
  ]

  // const 변수이름작명 = map 반복문을 통해 반복처리하고 결과를 반환받는다.

  const movieList = movies.map((movie, idx)=>(
    <ul className='movie-list' key={movie.id}>
      <li className='movie-item'>{movie.title}</li>
      <li className='movie-item'>{movie.year}</li>
    </ul>
  ))  

  return (
    <div>
      <h1>영화리스트 map 출력</h1>
      <h2>map함수 활용 출력</h2>
      {/* ul 리스트가 표시됨 */}
      <div className='movie-wrap'>{movieList}</div>

      <h2>데이타에서 바로 출력(비추천)</h2>
      <div className='movie-wrap'>
        <ul>
          <li>{movies[0].title}</li>
          <li>{movies[0].year }</li>
        </ul>
        <ul>
          <li>{movies[1].title}</li>
          <li>{movies[1].year }</li>
        </ul>
        <ul>
          <li>{movies[2].title}</li>
          <li>{movies[2].year }</li>
        </ul>
      </div>
    </div>
  )
}

export default App