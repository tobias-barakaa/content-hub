import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className='nav-link'>
      {links.map((link) => {
        const { text, path, icon } = link;
        // const { role } = user;
        // if (path === 'admin' && role !== 'admin') return;
        return (
          <aside 
          className={`sidebar-link`}
          
          >
             <NavLink
            to={path}
            key={text}
             // onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
            </aside>
         
        );
      })}
    </div>
  );
};
export default NavLinks;