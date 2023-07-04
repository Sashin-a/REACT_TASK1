import Button from '../../../../common/Button/Button';
import './courseCard.css';
// import { useState } from 'react';
import { convertMinutesToHours as timeConverter } from '../../../../util';
// import { mockedAuthorsList } from '../../../../constants';
// import CreateCourse from '../../../CreateCourse/CreateCourse';
import { BUTTON_LABEL_SHOW_COURSE } from '../../../../constants';
export default CourseCard;

function CourseCard({ title, duration, creationDate, authors, description }) {
	// const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	// const [courseObj, setCourseObj] = useState(null);

	function formatAuthors(authors) {
		const MAX_LENGTH = 40;
		let len = 0;
		let val = '';
		authors.forEach((author) => {
			if (author.length + len < MAX_LENGTH) {
				if (val.length !== 0) {
					val += ', ';
				}
				val += author;
				len += author.length;
			} else {
				val += '...';
			}
		});
		return val;
	}

	function showCourse() {
		console.log('show');
		let courseObj = {
			title,
			description,
			duration,
			creationDate: new Date().toDateString(),
			// authors: authorsList.map((author) => author.id).filter((x) => existingAuthNames.includes(x.name));,
		};
		console.log(courseObj);
		// setCourseObj(courseObj);
	}

	return (
		<div className='course-card'>
			{/* {courseObj != null ? (
				<div className='course-create'>
					<br />
					<br />
					<CreateCourse readonlyObj={courseObj} authors={authorsList} />
				</div>
			) : null} */}

			<div className='container'>
				<div className='row'>
					<div className='col-8'>
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
					<div className='col-4'>
						<br />
						<br />
						<p>
							<strong>Authors :</strong> {formatAuthors(authors)}
						</p>
						<p>
							<strong>Duration:</strong> {timeConverter(duration)} hours
						</p>
						<p>
							<strong>Created:</strong> {creationDate}
						</p>

						<Button
							className='show-course-btn'
							buttonText={BUTTON_LABEL_SHOW_COURSE}
							btnLook='btn btn-outline-secondary'
							onClick={showCourse}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
