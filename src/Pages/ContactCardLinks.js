import React,{useEffect} from 'react';
import './ContactCardLinks.css';
import Sidebar from '../components/Sidebar';
import { useHistory} from 'react-router-dom';

// Icons

import Instagram from '../assets/social-media-icons-dark/Instagram.png';
import Twitter from '../assets/social-media-icons-dark/twitter.png';
import Facebook from '../assets/social-media-icons-dark/facebook.png';
import LinkedIn from '../assets/social-media-icons-dark/linkedin.png';
import Clubhouse from '../assets/social-media-icons-dark/clubhouse.png';
import Snapchat from '../assets/social-media-icons-dark/snapchat.png';
import TikTok from '../assets/social-media-icons-dark/tik-tok.png';
import Reddit from '../assets/social-media-icons-dark/reddit.png';
import Tumblr from '../assets/social-media-icons-dark/tumblr.png';
import Pinterest from '../assets/social-media-icons-dark/pinterest.png';
import Digg from '../assets/social-media-icons-dark/digg.png';
import Youtube from '../assets/social-media-icons-dark/youtube.png';
import Vimeo from '../assets/social-media-icons-dark/vimeo.png';
import Twitch from '../assets/social-media-icons-dark/twitch.png';
import AppleMusic from '../assets/social-media-icons-dark/apple-music.png';
import Soundcloud from '../assets/social-media-icons-dark/soundcloud.png';
import Spotify from '../assets/social-media-icons-dark/spotify.png';
import ApplePodcast from '../assets/social-media-icons-dark/apple-podcast.png';
import GooglePodcast from '../assets/social-media-icons-dark/google-podcast.png';
import Stitcher from '../assets/social-media-icons-dark/stitcher.png';
import TuneIn from '../assets/social-media-icons-dark/tune-in.png';
import Medium from '../assets/social-media-icons-dark/medium.png';
import TechCrunch from '../assets/social-media-icons-dark/tech-crunch.png';
import WashingtonPost from '../assets/social-media-icons-dark/washington-post.png';
import Blogspot from '../assets/social-media-icons-dark/blogspot.png';
import Shopify from '../assets/social-media-icons-dark/shopify.png';
import Amazon  from '../assets/social-media-icons-dark/amazon.png';
import Behance from '../assets/social-media-icons-dark/behance.png';
import Devian  from '../assets/social-media-icons-dark/devian-art.png';
import Whatsapp  from '../assets/social-media-icons-dark/whatsapp.png';
import Messenger  from '../assets/social-media-icons-dark/facebook-messenger.png';
import Telegram  from '../assets/social-media-icons-dark/telegram.png';
import Dropbox  from '../assets/social-media-icons-dark/dropbox.png';
import Wetransfer  from '../assets/social-media-icons-dark/wetransfer.png';
import Drive  from '../assets/social-media-icons-dark/google-drive.png';
import LinkCardModal from '../components/LinkCardModal';
// ICONS IMPORT
import InstagramIcon from '../assets/icons/instagram.png';
import TwitterIcon from '../assets/icons/twitter.png';
import FacebookIcon from '../assets/icons/facebook.png';
import LinkedInIcon from '../assets/icons/linkedin.png';
import ClubhouseIcon from '../assets/icons/clubhouse.png';
import SnapchatIcon from '../assets/icons/snapchat.png';
import TikTokIcon from '../assets/icons/tiktox.png';
import RedditIcon from '../assets/icons/reddit.png';
import TumblrIcon from '../assets/icons/tumblr.png';
import PinterestIcon from '../assets/icons/pintrest.png';
import DiggIcon from '../assets/icons/digg.png';
import YoutubeIcon from '../assets/icons/youtube.png';
import VimeoIcon from '../assets/icons/vimeo.png';
import TwitchIcon from '../assets/icons/twitch.png';
import AppleMusicIcon from '../assets/icons/applemusic.png';
import SoundcloudIcon from '../assets/icons/soundcloud.png';
import SpotifyIcon from '../assets/icons/spotify.png';
import ApplePodcastIcon from '../assets/icons/applepodcast.png';
import GooglePodcastIcon from '../assets/icons/googlepodcast.png';
import StitcherIcon from '../assets/icons/sticher.png';
import TuneInIcon from '../assets/icons/tunein.png';
import MediumIcon from '../assets/icons/medium.png';
import TechCrunchIcon from '../assets/icons/techcrunch.png';
import WashingtonPostIcon from '../assets/icons/washingtonpost.png';
import BlogspotIcon from '../assets/icons/blogspot.png';
import ShopifyIcon from '../assets/icons/shopify.png';
import AmazonIcon  from '../assets/icons/amazon.png';
import BehanceIcon from '../assets/icons/behance.png';
import DevianIcon  from '../assets/icons/devianart.png';
import WhatsappIcon  from '../assets/icons/whatsapp.png';
import MessengerIcon  from '../assets/icons/messenger.png';
import TelegramIcon  from '../assets/icons/telegram.png';
import DropboxIcon  from '../assets/icons/dropbox.png';
import WetransferIcon  from '../assets/icons/wettransfer.png';
import DriveIcon  from '../assets/icons/drive.png';
import  DashNav from "../components/DashNav";

export default function ContactCardLinks() {
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('app-access-token')===null){
            history.push("/signin");
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const goBack=()=>{
        history.push('/admin/contact-card');
    }
    return (
        <>
           <Sidebar />
          
           {/* Links Section */}
           <div style={{height:'100%',overflowY:'scroll',border:'none'}}>
               <DashNav />
               <div className="container contact-page-links ">
                <div className="row pb-3">
                    <div className="col-lg-12 ">
                        <button className="btn btn-black pull-left no-outline" onClick={goBack}>Back to Home</button>
                    </div>
                </div>
                {/* List of Platforms */}
                <div className=" contact-page-links-section ">
                    <h3 className="mb-2">Social Media Platforms</h3>
                    <div className="row p-3">
                        <LinkCardModal Image={Instagram} name="Instagram" color="#EA76AD" bgImage={InstagramIcon} />
                        <LinkCardModal Image={Twitter} name="Twitter" color="#55ACEE" bgImage={TwitterIcon} />
                        <LinkCardModal Image={Facebook} name="Facebook" color="#4867AA" bgImage={FacebookIcon} />
                        <LinkCardModal Image={LinkedIn} name="LinkedIn" color="#0077B5" bgImage={LinkedInIcon} />
                        <LinkCardModal Image={Clubhouse} name="Clubhouse" color="#F3C139" bgImage={ClubhouseIcon} />
                        <LinkCardModal Image={Snapchat} name="Snapchat" color="#F2CC1A" bgImage={SnapchatIcon} />
                        <LinkCardModal Image={TikTok} name="TikTok" color="#1F1F1F" bgImage={TikTokIcon} />
                        <LinkCardModal Image={Reddit} name="Reddit" color="#E64E4E" bgImage={RedditIcon} />
                        <LinkCardModal Image={Tumblr} name="Tumblr" color="#547A98" bgImage={TumblrIcon} />
                        <LinkCardModal Image={Pinterest} name="Pinterest" color="#DB4E4E" bgImage={PinterestIcon} />
                        <LinkCardModal Image={Digg} name="Digg" color="#3475DB" bgImage={DiggIcon} />
                    </div>
                </div>
                <div className="contact-page-links-section">
                       <h3 className="mb-2">Video Platforms</h3>
                        <div className="row p-3">
                            <LinkCardModal Image={Youtube} name="Youtube" color="#FA5656" bgImage={YoutubeIcon} />
                            <LinkCardModal Image={Vimeo} name="Vimeo" color="#31ADD9" bgImage={VimeoIcon} />
                            <LinkCardModal Image={Twitch} name="Twitch" color="#6444A3" bgImage={TwitchIcon} />
                        </div>
                   </div>
                   <div className="contact-page-links-section">
                       <h3 className="mb-2">Music Streaming Platforms</h3>
                        <div className="row p-3">
                            <LinkCardModal Image={AppleMusic} name="AppleMusic" color="#FA5665" bgImage={AppleMusicIcon} />
                            <LinkCardModal Image={Soundcloud} name="Soundcloud" color="#EE8336" bgImage={SoundcloudIcon} />
                            <LinkCardModal Image={Spotify} name="Spotify" color="#28A655" bgImage={SpotifyIcon} />
                            <LinkCardModal Image={ApplePodcast} name="ApplePodcast" color="#A169F3" bgImage={ApplePodcastIcon} />
                            <LinkCardModal Image={GooglePodcast} name="GooglePodcast" color="#FAC840" bgImage={GooglePodcastIcon} />
                            <LinkCardModal Image={Stitcher} name="Stitcher" color="#7550BF" bgImage={StitcherIcon} />
                            <LinkCardModal Image={TuneIn} name="TuneIn" color="#1C203C" bgImage={TuneInIcon} />
                        </div>
                   </div>
                   <div className="contact-page-links-section">
                       <h3 className="mb-2">Publishing Platforms</h3>
                        <div className="row p-3">
                            <LinkCardModal Image={Medium} name="Medium" color="#14C767" bgImage={MediumIcon} />
                            <LinkCardModal Image={TechCrunch} name="TechCrunch" color="#458E41" bgImage={TechCrunchIcon}  />
                            <LinkCardModal Image={WashingtonPost} name="WashingtonPost" color="#1955A5" bgImage={WashingtonPostIcon} />
                            <LinkCardModal Image={Blogspot} name="Blogspot" color="#EF7241" bgImage={BlogspotIcon} />
                        </div>
                   </div>
                   <div className="contact-page-links-section">
                       <h3 className="mb-2">Shopping Platforms</h3>
                        <div className="row p-3">
                            <LinkCardModal Image={Shopify} name="Shopify" color="#95BF46" bgImage={ShopifyIcon} />
                            <LinkCardModal Image={Amazon} name="Amazon" color="#F8A51B" bgImage={AmazonIcon} />
                        </div>
                   </div>
                   <div className="contact-page-links-section">
                       <h3 className="mb-2">Portfolio Platforms</h3>
                        <div className="row p-3">
                            <LinkCardModal Image={Behance} name="Behance" color="#548EF9" bgImage={BehanceIcon} />
                            <LinkCardModal Image={Devian} name="DevianArt" color="#30D767" bgImage={DevianIcon} />
                        </div>
                   </div>
                   <div className="contact-page-links-section">
                       <h3 className="mb-2">Messaging Platforms</h3>
                        <div className="row p-3">
                            <LinkCardModal Image={Whatsapp} name="Whatsapp" color="#45C44D" bgImage={WhatsappIcon} />
                            <LinkCardModal Image={Messenger} name="Messenger" color="#44A2F9" bgImage={MessengerIcon}  />
                            <LinkCardModal Image={Telegram} name="Telegram" color="#27A5E3" bgImage={TelegramIcon} />
                        </div>
                   </div>
                   <div className="contact-page-links-section">
                       <h3 className="mb-2">File Sharing Platforms</h3>
                        <div className="row p-3">
                            <LinkCardModal Image={Dropbox} name="Dropbox" color="#307BF2" bgImage={DropboxIcon} />
                            <LinkCardModal Image={Wetransfer} name="Wetransfer" color="#2A2A2A" bgImage={WetransferIcon} />
                            <LinkCardModal Image={Drive} name="Drive" color="#F9D05F" bgImage={DriveIcon} />
                        </div>
                   </div>
               </div>
           </div>
        </>
    )
}
