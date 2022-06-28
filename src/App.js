import React from 'react';
import {ProductDescription} from '../src/Components/ProductDescription'
import {ImageCarousel} from '../src/Components/ImageCarousel'
import '../src/Styles/App/app.css'

function App() {
  return <section className='main-app'>
    <ImageCarousel />
    <ProductDescription />
  </section>
}

export default App;
