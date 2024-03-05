import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Open Source Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'devops-linux',
		company: 'Ingryd Academy',
		description: 'I recently completed a Linux/DevOps program where I honed my skills in server provisioning using\
		Ansible, established efficient file sharing through NFS and Samba, configured static DNS using Netplan\
		for network stability,and enhanced system security by implementing firewalls. This program provided\
		hands-on experience in system administration and automation,contributing to a well-rounded skillset\
		in Linux and DevOps practices',
		contract: ContractType.Internship,
		type: 'Developer Operations',
		location: 'Lagos',
		period: { from: new Date() },
		skills: getSkills('nginx', 'ansible', 'linux'),
		name: 'Linux Administrator',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Managing Linux networking and deployment'
	},
	{
		slug: 'backend-engineer',
		company: 'ALX Software Engineering',
		description: 'Upon completing my foundation program, my partner and I designed and launched a project\
		management application called TaskPilot(http://taskpilot.me). This project was developed using a\
		range of tools, including Flask, React, MySQL, Nginx, and Gunicorn, among other technologies. I took\
		full responsibility for developing the frontend of the application and played a significant role in the\
		backend development as well.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Lagos',
		period: { from: new Date(2022, 10, 1), to: new Date(2023, 12, 1) },
		skills: getSkills('ts', 'js'),
		name: 'Backend Software Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js', 'react'),
		name: 'Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'frontend-developer-junior',
		company: 'Self-employed',
		description: 'Since 2021 and continuing to the present day, I have been wholeheartedly committed to mentoring\
		individuals who are new to the field of technology, both within my local community and online. My\
		focus has particularly been on frontend technologies,such as HTML, CSS, JavaScript, and React,\
		 alongside various backend technologies. Engaging in this mentorship role has not only brought me\
		immense joy but has also significantly strengthened my knowledge in these domains',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Lagos',
		period: { from: new Date(2021, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Frontend Developer Mentor',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
