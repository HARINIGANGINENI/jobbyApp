import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = similarJobData

  return (
    <li className="similar-job-container">
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
      <div className="second-part-container">
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </div>
      <div>
        <div className="icon-container">
          <MdLocationOn />
          <p>{location}</p>
        </div>
        <div className="employment-type-container">
          <p>{employmentType}</p>
        </div>
      </div>
    </li>
  )
}
export default SimilarJobs
