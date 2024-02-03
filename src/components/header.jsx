import React from 'react';

import topTweet from '../images/top-tweet.png';

const Header = () => {
  return (

    <header className='header'>

      <h1><a href='#'>Home</a></h1>
      <img src={topTweet} className="topTweet" />
      


    </header>
  )
}
export default Header;