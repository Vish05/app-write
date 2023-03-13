import { useEffect } from 'react';
import './App.css';
import api from './api/api';
import { login } from "./utils/authSlice";
import Header from './components/Header';
import Todos from './components/Todos';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth)
  console.log("userId=" + userId);

  useEffect(() => {
    createAnnoUser()
  }, [])

  const createAnnoUser = async () => {
    await api.createSession();
    const data = await api.getAccount();
    console.log("data");
    dispatch(login(data));
  }
  
  return (
    <>
      <Header />
      <Todos />
    </>
  );
}

export default App;
