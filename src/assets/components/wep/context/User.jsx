import axios from 'axios';
import { createContext,useEffect,useState } from 'react';

export let UserContext = createContext();

export default function UserContextprovider({children}) {
    const [userToken,setUserToken] = useState(null);
    const [userData,setUserData] = useState(null);

    const getUserData = async () => {
      if(userToken){
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,
      {headers:{authorization:`Tariq__${userToken}`}})
       setUserData(data.user);

 }
  }
  useEffect(()=>{
getUserData();
  },[userToken])
    return <UserContext.Provider value={{userToken,setUserToken,userData,setUserData}}>
      {children}
    </UserContext.Provider>
  
}
