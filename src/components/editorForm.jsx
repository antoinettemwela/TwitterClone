import React from 'react';
import profilePhoto from '../images/Profile-Photo.png';
import imageIcon from '../images/imageIcon.png';
import imageGift from '../images/imageGift.png';
import imagePoll from '../images/imagePoll.png';
import imageEmoji from '../images/imageEmoji.png';
import imageSchedule from '../images/imageSchedule.png';
import imagesTweet from '../images/imagesTweet.png';
function EditorForm() {
  return(
    <>
    <img src={profilePhoto} className="profilPhoto"/>
    <form className="editorForm">
    <input type="text" placeholder="What's happening?"/>
  
      <div className="tweet-editor-Buttons">
    <div className="tweet-editor-actions">

      <button> <img src={imageIcon} /></button>
      <button> <img src={imageGift} /></button>
      <button> <img src={imagePoll} /></button>
      <button> <img src={imageEmoji} /></button>
      <button> <img src={imageSchedule}/></button>
    
      <div className='button'>
      <button> <img src={imagesTweet} /></button>
      </div>
    </div>

    </div>
    
      </form>
    </>
  )
  }
export default EditorForm;