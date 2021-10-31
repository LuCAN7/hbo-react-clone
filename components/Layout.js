import Header from './Header';
import SideNav from './SideNav';

const Layout = (props) => {
  return (
    <div className='main-layout'>
      <Header />
      <SideNav />
      <section className='contain-container'>{props.children}</section>
    </div>
  );
};

export default Layout;
