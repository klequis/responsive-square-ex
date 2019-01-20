import React from 'react'
import { Link, Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import Header from 'ui/Header'
import Footer from 'ui/Footer'
import SquareNoContent from './SquareNoContent'
import SquareWithContent from './SquareWithContent'

class App extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div id='App-wrapper' className={classes.wrapper}>
        <Header />
        <nav>
          <ul>
            <li><Link to='/square-with-no-content'>Square without content</Link></li>
            <li><Link to='/square-with-content'>Square with content</Link></li>
          </ul>
        </nav>
        <main>
          <Route path='/square-with-no-content' component={SquareNoContent} />
          <Route path='/square-with-content' component={SquareWithContent} />
        </main>
        <Footer />
      </div>
    )
  }
}


const styles = theme => ({
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
  },
})

export default injectSheet(styles)(App)