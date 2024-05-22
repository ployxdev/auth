import { useState } from 'react';
import {
  Outlet,
} from "react-router-dom";
import { account, login } from './libs/appwrite';
import { SettingContext, SettingType } from './contexts/setting.context';
import TopBar from './components/TopBar';

function App() {
  console.log('CALL APP');
  const [currentSetting, setCurrentSetting] = useState<SettingType>({
    user: {
      email: 'y'
    }
  });

  const [count, setCount] = useState(0);

  return (
    <SettingContext.Provider value={{ currentSetting, setCurrentSetting }}>
      <div className='flex flex-col p-5'>

        <TopBar />

        <div>
          <Outlet />
          <button className="btn btn-primary" onClick={() => {
            setCount((count) => count + 1);
            // createUser('ployx@ioiio.cc', 'password');
            // createVerification();
            login('ployx@ioiio.cc', 'password');
            // console.log(account.get());
          }}>count is {count}</button>

          <button className="btn btn-primary" onClick={() => {
            account.get()
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}>Get</button>
        </div>




      </div>
    </SettingContext.Provider>
  );
}

export default App;
