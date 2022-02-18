let educationInformation = [{
	level: 'Vocational Certificate',
	major: 'Electronics',
	institutions: 'Surin Technical College'
}, {
	level: 'High Vocational Certificate',
	major: 'Computer Technology',
	institutions: 'Surin Technical College'
}, {
	level: `Bachelor's degree`,
	major: 'Computer Engineering',
	institutions: 'Rajamangala University of Technology Isan'
}];

const getEducationInfomation = () => {
	return educationInformation;
};

export default {
	getEducationInfomation
};