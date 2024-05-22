import { useContext } from 'react';
import { SettingContext } from '../contexts/setting.context';
import { logout } from '../libs/appwrite';

function TopBar() {
  const setting = useContext(SettingContext);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">auth</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-xl">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between" onClick={() => { setting?.setCurrentSetting({ user: { email: 'G' } }) }}>
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <label className="flex cursor-pointer gap-1"
              // onClick={(e) => {
              //   e.preventDefault();
              //   const t = document.documentElement.dataset.theme;
              //   console.log(t);
              //   if (t !== 'cupcake') {
              //     document.documentElement.dataset.theme = 'cupcake';
              //   } else {
              //     document.documentElement.dataset.theme = 'sunset';
              //   }
              // }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                <input type="checkbox" className="toggle theme-controller h-3"
                  // value="synthwave"
                  onClick={() => {
                    console.log('cc');
                    // e.preventDefault();
                    const t = document.documentElement.dataset.theme;
                    console.log(t);
                    if (t !== 'cupcake') {
                      document.documentElement.dataset.theme = 'cupcake';
                    } else {
                      document.documentElement.dataset.theme = 'sunset';
                    }
                  }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              </label>
            </li>
            <li><a onClick={() => { }}>email: {setting?.currentSetting.user.email}</a></li>
            <li><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
