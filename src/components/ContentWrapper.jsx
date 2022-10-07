import React from 'react'
import ContentRowtop from './ContentRowtop'
import Footer from './Footer'
import Table from './Table'
import TopBar from './TopBar'

export default function ContentWrapper() {
  return (
		<div id="content-wrapper" className="d-flex flex-column">
			{/* <!-- Main Content --> */}
            <div id="content">
            {/* <!-- Topbar --> */}
                <TopBar/>
            {/* <!-- End of Topbar --> */}
            {/* <!-- Content Row Top --> */}
                <ContentRowtop/>
            {/* <!--End Content Row Top--> */}
                <div className="row">
                    <div className='card col-lg-10 mb-4 mx-auto'>
                        <Table/>
                    </div>
                </div>
            </div>
			{/* <!-- End of MainContent --> */}
            
			{/* <!-- Footer --> */}
            <Footer/>
			{/* <!-- End of Footer --> */}
		</div>
  )
}
