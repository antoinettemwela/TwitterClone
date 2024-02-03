import React from 'react';
import EditorForm from '../components/editorForm.jsx';
import Header from '../components/header.jsx';
import Tweets from '../components/tweets.jsx';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <EditorForm />
      <Tweets />
      


    </main>
  );
}

export default Home;