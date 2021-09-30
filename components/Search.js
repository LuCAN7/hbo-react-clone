const Search = (props) => {
  const loopComponent = (comp, digit) => {
    const thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className='search'>
      <div className='search__input-group'>
        <input
          className='search__input'
          type='text'
          placeholder='Search for a title'
          value=''
        />
        <div className='search__close-btn'>
          <i className='fas fa-times' />
        </div>
      </div>
      <h3 className='search__title'>Popular Searches</h3>
      <div className='search__thumbnails'>
        {loopComponent(
          <div className='search__thumbnail'>
            <img src='https://th.bing.com/th/id/R.9b9da5f8ae4c6940ab3bc765acfe0807?rik=llZEkrs1Kb3%2fQA&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2favengers-endgame-2019-official-new-poster-3p-1280x2120.jpg&ehk=SBvoyTpyoOw2APfbrUupGJzj8PqEjIQzkLwdivBhD14%3d&risl=&pid=ImgRaw&r=0' />
            <div className='search__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default Search;
