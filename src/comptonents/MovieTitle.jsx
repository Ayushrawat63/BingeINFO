
const MovieTitle = (prop) => {
  return (
    <div className="pt-44 px-20 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-extrabold">{prop.title}</h1>
        <p className="w-2/4 pt-2">{prop.overview}</p>
        <div className="mt-2"> 
            <button className="p-4 px-10 bg-white rounded-lg text-lg font-bold text-black hover:opacity-80 ">Play</button>
            <button className="p-4 px-10 bg-slate-700 rounded-lg text-lg font-semibold bg-opacity-40 ml-2 text-white hover:opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default MovieTitle