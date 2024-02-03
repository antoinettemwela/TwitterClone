import React from 'react'
import imagePhoto from '../images/imagePhoto.png';
import Accaount from '../images/Accaount.png';
import groupImage from '../images/groupImage.png';
import Retweet from '../images/Retweet.png';
import IconReact from '../images/IconReact.png';
import Share from '../images/Share.png';
import Group from '../images/Group.png';
import Name from '../images/Name.png';
import tweetBody from '../images/tweetBody.png';
import tweetDetails from '../images/tweetDetails.png';
import titleDetails from '../images/titleDetails.png';
import details from '../images/details.png';
import titleTweet from '../images/titleTweet.png';
import tweetIcon from '../images/tweetIcon.png';
import CountActions from '../images/CountActions.png';
import CountTweet from '../images/CountTweet.png';
import CountIcon from '../images/CountIcon.png';
import CountText from '../images/CountText.png';
import Count36 from '../images/Count36.png';
import TextCount from '../images/TextCount.png';
import TweetCount from '../images/TweetCount.png';
import countReTweet from '../images/countReTweet.png';
import CountReact from '../images/CountReact.png';
import CountGroup from '../images/CountGroup.png';
import CountDetail from '../images/CountDetail.png';
import CountTitle from '../images/CountTitle.png';




function Tweets(props) {

  return (
    <>
      
        
    <div className='tweet'>
      <h2><img src={imagePhoto} className="imagePhoto"/></h2>
      
      <p><h3><a href='#'><img src={Accaount} className="Account"/></a></h3>President Joe Biden touted a new agreement reached with Europaen Union to ease Trump-era tariffs on alliminum and steele ase a "major break-through" that would serve to both strengthen the US steel industry and combat the global climat and crisis.<div className="tweet-editor-Buttons">
        
        <div className='tweet-actions'>
          <button> <img src={groupImage} /><img src={CountActions} /></button><button> <img src={Retweet} /><img src={CountTweet} /></button><button> <img src={IconReact} /><img src={CountIcon} /></button><button> <img src={Share} /></button>  
        </div>
      </div>
        
        <div className='tweet-content'>

        </div> 

        <span>
          <div className="tweet-content">
           
          <div className="tweet-body">
        <div className='tweet-title'>
          <h3>The New York Time<img src={Group} className="Group"/><img src={Name} className="Name"/></h3>

        </div>
        </div>
            </div>
          </span>
          
          
          
            <div className='tweet-text'>
              <p>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
            </div>
        <div className='tweet-image'>
          <img src={tweetBody} className="tweetBody"/>
        </div>
        <div className='tweet-actions'>
           <button> <img src={groupImage} /><img src={CountText} /></button><button><img src={Retweet}/><img src={Count36} /></button><button> <img src={IconReact} /><img src={TextCount} /></button><button> <img src={Share} /></button> 
          
        </div>
    
        <div className='tweet'>
           <button> <img src={tweetDetails} /></button>
           <h4>tweeter<img src={Group} className="Group"/><img src={titleDetails} className="titleDetails"/><img src={details} className="details"/><img src={titleTweet} className="titleTweet"/> <p>BIG NEWS lol jk still tweeter</p> </h4>
          
  
            
         
         </div>
         
             
           
           <div className='tweet-actions'>
              <button> <img src={groupImage} /> <img src={TweetCount} /></button><button> <img src={Retweet} /> <img src={countReTweet} /></button><button> <img src={IconReact} /><img src={CountReact} /></button><button> <img src={Share} /></button> 

           </div>
           <div className='tweet'>
             <button> <img src={tweetDetails} /></button>
             <h5>tweeter<img src={Group} className="Group"/><img src={titleDetails} className="titleDetails"/><img src={details} className="details"/><img src={tweetIcon} className="tweetIcon"/><p>hello literally everyone</p></h5>
             </div>
             <div className='tweet-actions'>
                 <button> <img src={groupImage} /><img src={CountGroup} /></button><button> <img src={Retweet} /><img src={CountDetail} /></button><button> <img src={IconReact} /><img src={CountTitle} /></button><button> <img src={Share} /></button> 

              </div>
        <div className='tweet'>
           <button> <img src={tweetDetails} /></button>
           <h5>tweeter<img src={Group} className="Group"/><img src={titleDetails} className="titleDetails"/><img src={details} className="details"/><img src={tweetIcon} className="tweetIcon"/><p>hello literally everyone</p></h5>
           </div>
           
          
        
        
        
        </p>
      
              



      
        
      
      
      
        
        
    </div>
        
      </>
  )
}
export default Tweets;