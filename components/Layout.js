import Headers from './Header';
import SideNav from './SideNav';

const Layout = (props) => {
  return (
    <div className='main-layout'>
      <Headers />
      <SideNav />
      <section className='contain-container'>{props.children}</section>
    </div>
  );
};

export default Layout;
