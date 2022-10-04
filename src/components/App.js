import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";

function App() {
  return (
    <div id="wrapper">

		{/* <!-- Sidebar --> */}
      <SideBar/>
		{/* <!-- End of Sidebar --> */}
      <ContentWrapper/>
	  </div>
    
  );
}

export default App;
