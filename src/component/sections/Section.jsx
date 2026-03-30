import React from 'react';
import "./section.css";
export default function Section() {
  return (
    <section className='flex  container-section'>
        <div className='section-one flex'>
      <div className='section '>
        <p>moua9ite salate</p>
        <p>vendredi 17 mai 2026</p>
      </div>
      <div className='section-chiled'>
        <p>Nktt , Mrtt</p>
        <p>vendredi 17 mai 2026</p>
        <span>16:10</span>
      </div>
      </div>
<div className='flex section-timer '>
    <div className='parent-pargraphe'>
        <p>timer pour la prochaine player</p>
        <p className='temp'>01:16:20</p>

    </div>
    <div></div>
</div>
    </section>
  )
}
