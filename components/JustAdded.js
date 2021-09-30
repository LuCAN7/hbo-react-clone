import Image from 'next/image';

const JustAdded = (props) => {
  const loopComponent = (comp, digit) => {
    const thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className='just-added'>
      <h3 className='just-added__title'>Just Added</h3>
      <div className='just-added__thumbnails'>
        {loopComponent(
          <div className='just-added__thumbnail'>
            <Image
              src='https://th.bing.com/th/id/R.9b9da5f8ae4c6940ab3bc765acfe0807?rik=llZEkrs1Kb3%2fQA&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2favengers-endgame-2019-official-new-poster-3p-1280x2120.jpg&ehk=SBvoyTpyoOw2APfbrUupGJzj8PqEjIQzkLwdivBhD14%3d&risl=&pid=ImageRaw&r=0'
              alt=''
            />
            <div className='just-added__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default JustAdded;
