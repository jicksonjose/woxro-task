import React from 'react';
import CrossImage from '../assets/images/crossimage.png';
import Spotlight from '../assets/images/spotlight.png';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

const Index = () => {

    const ImageWithPosition = ({ src, alt }) => {
        const imageStyle = {
            position: 'absolute',
            top: '50px',
            right: '47px',

        };

        return <img src={src} alt={alt} className="img-fluid" style={imageStyle} />;
    };

    const SpotlightH1 = ({ children }) => {
        const style = {
            color: 'white',
            fontSize: '45px',
            fontWeight: '200',
            lineHeight: '48px',
            marginTop: '147px',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1375px',
            margin: '140px auto',
        };

        return <h1 style={style}>{children}</h1>;
    };
    const Contribution = ({ children }) => {
        const style = {
            color: 'white',
            fontSize: '45px',
            fontWeight: '200',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1375px',
            margin: '100px auto',
        };

        return <h1 style={style}>{children}</h1>;
    };


    const buttonStyle = {
        height: "29px",
        width: "212.99px",
        color: "black",
        fontWeight: 400,
        position: 'absolute',
        top: '979px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        lineHeight: "28.5px",
        fontWeight: 400,

    };
    const FooterButton1 = {
        height: "29px",
        width: "212.99px",
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
        fontWeight: 400,
        position: 'absolute',
        left: "30%",
        display: 'flex',
        justifyContent: 'center',
        lineHeight: "28.5px",
    };
    const FooterButton2 = {
        height: "29px",
        width: "212.99px",
        color: "black",
        fontWeight: 400,
        position: 'absolute',
        left: '60%',
       
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        lineHeight: "28.5px",
    };
    


    const colImg = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '100px',
        width: '80%', // adjust as needed
        margin: '150px auto', // horizontally center the column
    };


    const h1Style = {
        fontSize: '80px',
        color: "white",
    };


    const LikesDiv = {

    }

    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg ">
                    <div className="">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <ImageWithPosition src={CrossImage} alt="Image" />
                        </div>
                    </div>
                </nav>
            </section>

            <section className="container-fluid">
                <div className='container text-center'>
                    <SpotlightH1>
                        Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.
                    </SpotlightH1>
                </div>

                {/*spotligth image */}
                <div className='container'>
                    <div className="text-center">
                        <img src={Spotlight} alt="" className="img-fluid" />
                    </div>
                </div>

                <div style={{ margin: "40px auto" }}>
                    <div className='container text-center' style={{ width: "1231px" }}>
                        <p tyle={{ textAlign: "justify", color: "#FFFFFF", opacity: "80%" }}>
                            Create, play, and battle with friends for free in Fortnite.
                            Be the last player standing in Battle Royale and Zero Build,
                            experience a concert or live event, or discover over a million creator made games,
                            including racing, parkour, zombie survival, and more. Each Fortnite island has an individual
                            age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
                        </p>
                    </div>

                    <div className='container' style={{ margin: "40px auto" }}>
                        <button type='button' style={buttonStyle}>
                            Visit Website
                        </button>
                    </div>
                </div>


                {/*section col images */}
                <div className='container' style={colImg}>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="image">
                                <img src={image1} alt="" className="img-fluid" />
                            </div>
                            <p>Explore large, destructible environments where no two games are ever the same.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="image">
                                <img src={image2} alt="" className="img-fluid" />
                            </div>
                            <p>Explore large, destructible environments where no two games are ever the same.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="image">
                                <img src={image3} alt="" className="img-fluid" />
                            </div>
                            <p>Explore large, destructible environments where no two games are ever the same.</p>
                        </div>
                    </div>
                </div>

                {/*contribution div*/}
                <div className="">
                    <div className='text-center'>
                        <Contribution>
                            Our Contribution
                        </Contribution>
                    </div>
                    <div className='container text-center' style={{ width: "1000px" }}>
                        <p style={{ color: "white" }}>Our core offering extends beyond mere profit generation; we emphasize the'
                            growth and active involvement of our user community. Collaborating with us
                            represents an investment, rather than a mere expenditure. Our dedication to
                            providing distinctive digital interactions guarantees unparalleled benefits for our clientele.

                        </p>
                    </div>
                </div>

                {/* Likes*/}
                <div className='container' style={LikesDiv}>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="image">
                                <h1 style={h1Style}>5M</h1>
                            </div>
                            <p>Daily User
                                Engagements </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="image">
                                <h1 style={h1Style}>$500K</h1>
                            </div>
                            <p>Revenue Surge for an
                                Platform</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="image">
                                <h1 style={h1Style}>10X</h1>
                            </div>
                            <p>ROAS on all our
                                marketing campaign</p>
                        </div>
                    </div>
                </div>

                {/* ================*/}
                <div className="">
                    <div className='text-center'>
                        <Contribution>
                            Interested in delving deeper into the project?
                        </Contribution>
                    </div>
                    <div className='container text-center' style={{ width: "700px" }}>
                        <p style={{ color: "white" }}>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.

                        </p>
                    </div>
                </div>

                 {/* Footer button */}
                <div className='container' style={{ margin: "40px auto" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <button type='button' style={FooterButton1}>
                               Ring us on Skype
                            </button>
                        </div>
                        <div className="col-md-6">
                            <button type='button' style={FooterButton2}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className='' style={{ margin: "200px auto" }}>
                    <div >
                        <p className='text-center'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index;
