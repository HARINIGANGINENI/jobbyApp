import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

const JobCardItem = props => {
  const {item} = props

  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = item

  return (
    <Link to={`/jobs/${id}`}>
      <li className="job-item-container">
        <div className="first-part-container">
          <div className="image-container">
            <img src={companyLogoUrl} alt="job details company logo" />
            <div className="title-rating-container">
              <h1>{title}</h1>
              <div className="star-rating-container">
                <AiFillStar />
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
            <div className="location-job-type-container">
              <div className="icon-container">
                <MdLocationOn />
                <p>{location}</p>
              </div>
              <div className="employment-type-container">
                <p>{employmentType}</p>
              </div>
            </div>
            <div className="package-container">
              <p>{packagePerAnnum}</p>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="second-part-container">
          <div className="visit-container">
            <h1>Description</h1>
            <p>{jobDescription}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default JobCardItem
