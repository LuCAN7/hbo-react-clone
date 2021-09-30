const PosterView = (props) => {
  const loopComponent = (comp, digit)=> {
    const thumbnails = [];
    for(let i = 0; i < digit; i++){
      thumbnails.push(comp);
    }
    return thumbnails;
  }
  return(
    <div className="poster-view">
      <h3 className="poster-view__title">Movies</h3>
      <div className="poster-view__thumbnails">
        {loopComponent((
          <div className="poster-view__thumbnail">
            <img src="https://image.tmdb.org/t/p/original/dHXp4cGOQtDrrdVPiffnXSjqkNQ.jpg"/>
            <div className="poster-view__top-layer">
              <i className="fas fa-play"/>
            </div>
          </div>)
        ,10)}
        
      </div>

    </div>
  )
}

export default PosterView;