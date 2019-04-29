import React from 'react';

import useGetSeason from './useGetSeason'
import styles from './SeasonDisplay.module.css'

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: 'sun'
  },

  winter: {
    text: `Burr, It's Cold!`,
    iconName: 'snowflake'
  }
}

export default function SeasonDisplay({ latitude, longitude }) {
  const [season] = useGetSeason({ latitude, longitude, month: new Date().getMonth()})

  const {text, iconName} = seasonConfig[season]

  return(
    <div className={`${styles.seasonDisplay} ${styles[season]}`}>
      <i className={`${iconName} icon massive ${styles.iconLeft}`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive ${styles.iconRight}`} />
    </div>
  )
}
