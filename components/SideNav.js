const SideNav = (props)=> {
  return (
    <article className="side-nav side-nav--active">
      <div className="side-nav__close-btn">
        <i className="fas fa-times"/>
      </div>
      <ul className="side-nav__main">
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/">Series</a></li>
        <li><a href="/">Movies</a></li>
        <li><a href="/">Originals</a></li>
        <li><a href="/">Just Added</a></li>
        <li><a href="/">Last Chance</a></li>
        <li><a href="/">Coming Soon</a></li>
        <li><a href="/">Trending Now</a></li>
      </ul>
      <div className="side-nav__divider"/>
      <ul className="side-nav__main">
        <li><a href="/">Action</a></li>
        <li><a href="/">Animation</a></li>
        <li><a href="/">Comedy</a></li>
        <li><a href="/">Crime</a></li>
        <li><a href="/">Documentaries</a></li>
        <li><a href="/">Drama</a></li>
        <li><a href="/">Fantasy & Sci-Fi</a></li>
        <li><a href="/">Horror</a></li>
        <li><a href="/">International</a></li>
        <li><a href="/">Kids & Family</a></li> 
        <li><a href="/">Mystery</a></li> 
        <li><a href="/">News/Talk</a></li> 
        <li><a href="/">Reality</a></li>
        <li><a href="/">Romance</a></li>
        <li><a href="/">Shorts</a></li>
        <li><a href="/">Sports</a></li>
      </ul>
    </article>

  )
}

export default SideNav;