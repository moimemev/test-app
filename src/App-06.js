import React from 'react'
import { useEffect, useState } from 'react'
import Movie from './components/Movie';

const App = () => {
  //상태변경 - 영화제목, 개봉년도
  const [movieTitle, setMovieTitle] = useState('타이틀');
  const [movieYear, setMovieYear] = useState('1994');

  //상태변경 - 영화 데이타 초기값 지정, 영화등록
  //const [변수, 변수함수] = useState(초기값);
  //객체배열 넣기
  const [movies, setMovies] = useState([
    {id:"m345", title:"인사이드아웃1", year:"2021"},
    {id:"m245", title:"인사이드아웃2", year:"2022"},
    {id:"m145", title:"인사이드아웃3", year:"2023"},
  ]);

  // const movieList = movies.map(function (movie){return ()})
  const movieList = movies.map((movie)=>{
      return (
        <Movie key={movie.title} title={movie.title} year={movie.year}/>
    )
  })
  useEffect(()=>{console.log('렌더링~~')})
  
  const addMovie = (event)=>{
    //기본동작 실행방지
    event.preventDefault();

    console.log('입력받은 영화제목',movieTitle);
    console.log('입력받은 개봉년도',movieYear);
    
    //이전상태 영화배열(previous state) + 새로운 상태
    setMovies([...movies,{title:movieTitle, year:movieYear}]);

    //입력창 초기화
    setMovieTitle('');
    setMovieYear('');
  }//addMovie 끝

  return (
    <div>
      <h2>영화등록하기</h2>
      <form onSubmit={addMovie} action='http://www.naver.com'>
        <input type="text" 
        placeholder="영화제목을 입력하세요" 
        value={movieTitle} 
        onChange={(e)=>{setMovieTitle(e.target.value)}}/>

        <input type="text" 
        placeholder="개봉년도를 입력하세요" 
        value={movieYear} 
        onChange={(e)=>{setMovieYear(e.target.value)}}/>

        <button>영화추가</button>
      </form>

      <h1>리액트 시작하기</h1>
      {movieList}
    </div>
  )
}

export default App