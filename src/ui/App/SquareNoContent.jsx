import React from 'react'
import injectSheet from 'react-jss'

const SquareWithContent = ({ classes }) => {
  return (
    <div className={classes.square}>
      <div className={classes.content}>
      </div>
    </div>
  )
}

const styles = theme => ({
  square: {
    width: '50%',
    '&::after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
    // dressing
    border: '1px solid red',
  },
})
export default injectSheet(styles)(SquareWithContent)