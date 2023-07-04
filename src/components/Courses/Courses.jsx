import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import './courses.css';
import { useState } from 'react';
import CreateCourse from '../CreateCourse/CreateCourse';
import { BUTTON_LABEL_ADD_AUTHOR } from '../../constants';
export default Courses;

function Courses() {
	const [searchText, setSearchText] = useState('');
	const [showPopup, setShowPopup] = useState(false);
	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const [courseList, setCourseList] = useState(mockedCoursesList);

	function addCourseToList(obj) {
		setCourseList([...courseList, obj]);
	}

	function addAuthorTo(obj) {
		console.log(obj);
		let existingAuthNames = authorList.map((x) => x.name);
		let newAuthors = obj.filter((x) => !existingAuthNames.includes(x.name));

		// obj.filter((newAuth)=>!authorList.includes())
		if (newAuthors) {
			setAuthorList([...authorList, ...newAuthors]);
		}
	}
	function getAuthors(course) {
		let authorNames = [];
		course.authors.forEach((authorId) => {
			authorList.forEach((author) => {
				if (author.id === authorId) {
					authorNames.push(author.name);
				}
			});
		});
		// console.log('Authors : ', authorNames);
		return authorNames;
	}
	const search = (text) => {
		setSearchText(text);
	};

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};
	return (
		<>
			<div className='container course-create'>
				<div className='row'>
					<div className='col-6'>
						<SearchBar onSearch={search} />
					</div>
					<div className='col-6 add-btn'>
						<Button
							buttonText={BUTTON_LABEL_ADD_AUTHOR}
							btnLook='btn btn-outline-dark'
							onClick={togglePopup}
						/>
					</div>
				</div>
			</div>
			{showPopup ? (
				<div className='course-create'>
					<br />
					<br />
					<CreateCourse
						authors={authorList}
						addCourseToList={addCourseToList}
						addAuthorTo={addAuthorTo}
					/>
				</div>
			) : null}
			<div className='cards course-create'>
				{courseList
					.filter((course) => {
						return (
							course.title.toLowerCase().includes(searchText.toLowerCase()) ||
							course.id.toLowerCase().includes(searchText.toLowerCase())
						);
					})
					.map((course) => (
						<CourseCard
							creationDate={course.creationDate}
							description={course.description}
							duration={course.duration}
							title={course.title}
							key={course.id}
							authors={getAuthors(course)}
						/>
					))}
			</div>
		</>
	);
}
