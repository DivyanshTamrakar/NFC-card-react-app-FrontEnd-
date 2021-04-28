import React from 'react';
import './AboutUs.css';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';

export default function AboutUs() {
    return (
        <>
            <NavbarTop />
            {/* About */}
           <div className="about ">
                <div className="container mt-5">
                    <h2 className="about__heading">About The Know Card</h2>
                    <p className="about__heading__paragraph">The Know Card makes your online content more discoverable, easier to manage and more likely to convert.</p>
                    <img src="https://images.ctfassets.net/lbsm39fugycf/3emsRGxOE4TAQzNTjidgNE/367ae2d3805ff609f1c556f651529e20/linktree-office.jpg" className="img-fluid mt-4 about-image" alt="about"/>
                    <p className="mt-5">
                        <h5 className="mb-3"><strong> We're a tool for connecting followers to your entire online world — not just one feed.</strong></h5> 
                        Know Card not only points followers in the direction of your choosing — to your other social profiles, eCommerce store, or content you want to share — but it helps hold followers within your online ecosystem for longer. It allows users to share more, sell more, curate more and grow more.
                    </p>
                    <p className="mt-5">
                        <h3 className="mb-3"><strong>Our Story</strong></h3> 
                        Bit, the building block of the digital world. It was invented just 70 years ago yet in its short life it has changed the way we communicate, do business, and live almost every aspect of our lives. It’s complex, precise and advanced but when it’s expressed it is effortless and refined.
                        <br/>
                        <br/>
                        And, that’s how we came up with the idea of Know at a time of need! We were seeking to get some business cards done for one of our other businesses at that time. And it made us question why just get a paper card when we can have all our information centralized which can be accessed directly by a link or with a digital card to maximize its effectiveness. It was at that moment that we decided that there can be a better way for exchanging information and introducing ourselves, and that’s how Know was born. An online platform that connects your audience with all your other touchpoints you want them to see! It makes your online content:
                        <br/>
                        <br/>
                        <ul>
                            <li><strong>Centralized</strong> </li>
                            <li><strong>Easy to manage </strong></li>
                            <li><strong>More discoverable</strong></li>
                            <li><strong>More likely to convert</strong></li>
                        </ul>
                    </p>
                </div>
           </div>
            
            {/* Footer */}
            <Footer/>
        </>
    )
}
