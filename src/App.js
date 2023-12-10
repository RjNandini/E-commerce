 import "./App.css"
 import AppFooter from "./components/AppFooter";
 import AppHeader from "./components/AppHeader";
 import PageContent from "./components/PageContent";
 import SideMenu from "./components/SideMenu";
 import {} from "react-router-dom"
 import { Space } from 'antd';
function App() {

  return (
    <div className="App">
      
       <AppHeader></AppHeader>
       <Space className="SideMenuAndPageContent">
       <SideMenu></SideMenu>
      <PageContent></PageContent>
     
      </Space>
      <AppFooter></AppFooter> 
     
      </div>
  );
}

export default App;
