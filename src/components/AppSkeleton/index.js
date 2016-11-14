import React from 'react'
import { Heading } from 'rebass'
import styles from './style.css'
import { EVCalculator } from 'components/EVCalculator'

export const AppSkeleton = () => (
  <div className={styles.appContainer}>
    <Heading level={1}>
      📸 Exposure Value
    </Heading>

    <EVCalculator />
  </div>
)

export default AppSkeleton
