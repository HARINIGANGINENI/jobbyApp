import {Link} from 'react-router-dom'
import Header from '../Header'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1>
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p>Millions of people are searching for jobs</p>
        <Link to="/jobs">
          <button type="button" onClick={onClickFindJobs}>
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
