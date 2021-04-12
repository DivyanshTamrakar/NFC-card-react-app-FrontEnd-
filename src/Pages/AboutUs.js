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
                        A Linktree not only points followers in the direction of your choosing — to your other social profiles, eCommerce store, or content you want to share — but it helps hold followers within your online ecosystem for longer. It allows users to share more, sell more, curate more and grow more.
                    </p>
                    <p className="mt-5">
                        <h3 className="mb-3"><strong>Our Story</strong></h3> 
                        In 2016 brothers Alex and Anthony Zaccaria and their business partner Nick Humphreys found a common pain point when running their digital agency, Bolster, managing social media accounts for their clients. Endlessly updating singular bio links felt like a waste of time, or worse, often got overlooked. Overnight, the first iteration of Linktree was live, and we haven't looked back since!
                        <br/>
                        <br/>
                        Today, with over 8 million users worldwide, we're helping brands, artists, publishers, agencies and influencers better control their presence online. As the internet became more fragmented, we grew Linktree's functionality to better serve those using it and to streamline the content-sharing process.
                        <br/>
                        <br/>
                        We're a passionate team of developers, designers, marketers and biz ops, committed to equipping content-creators with the best tools for getting their work seen. We're headquartered in Melbourne, Australia and have offices in Sydney and Los Angeles.
                        <br/>
                        <br/>
                        In 2019 we were thrilled to be one of CNBC's 'Upstart 100', a list of the "brightest, most intriguing, young startups promising to become the great companies of tomorrow". In March 2020, Fast Company honored us in their 'Most Innovative Companies of 2020' list, placing us number four in the Social Media category. Previous honorees of the Social Media fourth place include Glossier and Reddit.

                    </p>
                </div>
           </div>
            
            {/* Footer */}
            <Footer/>
        </>
    )
}
