import React from 'react'
import './Widget.css';
import { forwardRef } from 'react'
import FlipMove from 'react-flip-move';

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widget = forwardRef((ref) => {
  const newsArticle = (heading, subtitle) => (
    <div ref={ref} className="widget__article">
      <div className="wiget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widget'>
      <div className="widget__header">
        <h2>BLA BLAH</h2>
        <InfoIcon />
      </div>

      <FlipMove>
        {newsArticle('PAPA React is back', 'Top news - 9099 readers')}
        {newsArticle('Coronavirus - UK updates', 'Top news - 886 reader')}
        {newsArticle('Tesla hits new highs', 'Cars and Auto - 300 reader')}
        {newsArticle('Bitcoin Breaks $22k', 'Crypto - 8000 reader')}
        {newsArticle('Is Redux too good?', 'Code - 123 reader')}
        {newsArticle('PAPA react launches course?', 'Top news - 6503 reader')}
      </FlipMove>
    </div>
  )
})

export default Widget
