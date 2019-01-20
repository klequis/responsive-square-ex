import React from 'react'
import injectSheet from 'react-jss'

const SquareWithContent = ({ classes }) => {
  return (
    <div className={classes.square}>
      <div className={classes.content}>
        Hello!
      </div>
    </div>
  )
}

const styles = theme => ({
  square: {
    position: 'relative',
    width: '20%',
    '&::after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
    // dressing
    border: '1px solid red',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
})
export default injectSheet(styles)(SquareWithContent)