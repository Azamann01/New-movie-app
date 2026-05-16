import MovieCard from "../components/MovieCard"

function Home () {

    const movies=[
        {id:1, title:"john-wick", release_date:"2026"},
        {id:2, title:"Terminator", release_date:"2021"},
        {id:3, title:"Matrix", release_date:"2022"},
        {id:4, title:"seven-sisters", release_date:"2024"},
    ]



    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
}

export default Home