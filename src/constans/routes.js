export const books = {
	home: '/',
	aboutClinic: '/about',
	ourTeam: '/team',
	treatment: '/inpatient-treatment',
	multimodal: '/multimodal',
	contact: '/contacts',
};

export const links = [
    { title: 'footer:nav:1', link: books.aboutClinic },
    { title: 'footer:nav:2', link: books.ourTeam },
    { title: 'footer:nav:3', link: books.treatment },
    { title: 'footer:nav:4', link: books.contact }
];

const directions = [
	'psychiatrist',
	'pathopsychologist',
	'psychotherapist',
	'psychologist',
	'child-psychiatry',
	'neurologist',
	'neurophysiologist',
	'therapist',
	'sexologist',
	'narcologist',
	'ultrasound',
];





export const routes = directions.map((direction, index) => ({
    title: `footer:routes:${1 + index}`,
    link: direction
}));


