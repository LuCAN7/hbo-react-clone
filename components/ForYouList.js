// import Image from "next/image";

const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnail = [];
    for (let i = 0; i < digit; i++) {
      thumbnail.push(comp);
    }

    return thumbnail;
  };

  return (
    <div className='foryou-list'>
      <h3 className='foryou-list__title'>For You</h3>
      <div className='foryou-list__thumbnails'>
        {loopComp(
          <div className='foryou-list__thumbnail'>
            <img src='https://cdn.blocktoro.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-5-Release-Date-and-Trailer-scaled.jpg' alt=""/>
            <div className='foryou-list__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default ForYouList;
