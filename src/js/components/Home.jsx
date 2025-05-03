import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbo.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row no-gutters">

					<div className="col-md-3">
						<Card titulo={'Foto Victor'} aaaa={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut orci congue, efficitur mi eget, ullamcorper tortor. Nunc sit amet lectus et libero elementum euismod eu sit amet ligula. Nulla aliquet nulla a libero aliquet mattis. Maecenas molestie vulputate orci, quis volutpat orci tempor vel'} url_image={'https://www.outlife.cl/wp-content/uploads/2020/07/IMG_1109.jpg'} />
					</div>
					<div className="col-md-3">
						<Card titulo={' Foto Augusta'} aaaa={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut orci congue, efficitur mi eget, ullamcorper tortor. Nunc sit amet lectus et libero elementum euismod eu sit amet ligula. Nulla aliquet nulla a libero aliquet mattis. Maecenas molestie vulputate orci, quis volutpat orci tempor vel'} url_image={'https://www.outlife.cl/wp-content/uploads/2020/07/JCL_Outlife_Puertecillo_Pasarelas_Nov_DSC9738.jpg'} />
					</div>
					<div className="col-md-3">
						<Card titulo={' Foto Jero'} aaaa={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut orci congue, efficitur mi eget, ullamcorper tortor. Nunc sit amet lectus et libero elementum euismod eu sit amet ligula. Nulla aliquet nulla a libero aliquet mattis. Maecenas molestie vulputate orci, quis volutpat orci tempor vel'} url_image={'https://www.outlife.cl/wp-content/uploads/2020/07/JCL_Outlife_Puertecillo_Pasarelas_Nov_DSC9738.jpg'} />
					</div>
					<div className="col-md-3">
						<Card titulo={' Foto Teo'} aaaa={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut orci congue, efficitur mi eget, ullamcorper tortor. Nunc sit amet lectus et libero elementum euismod eu sit amet ligula. Nulla aliquet nulla a libero aliquet mattis. Maecenas molestie vulputate orci, quis volutpat orci tempor vel'} url_image={'https://www.outlife.cl/wp-content/uploads/2020/07/JCL_Outlife_Puertecillo_Pasarelas_Nov_DSC9738.jpg'} />
					</div>
				</div>
			</div>

			<Footer />
		</div>


	)
};

export default Home;