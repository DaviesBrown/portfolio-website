import Assets from './data/assets';
import type { Skill } from './types';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'Proficient in JavaScript for both front-end and back-end development, with experience in creating dynamic and interactive web applications.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'Skilled in TypeScript, utilizing its static typing features to enhance code quality and maintainability in large-scale projects.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description: 
			'Experienced in CSS for designing and styling web interfaces, ensuring a visually appealing and user-friendly experience.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: 
			'Proficient in HTML for structuring and organizing web content, ensuring compatibility across different browsers and devices.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'c',
		color: 'yellow',
		description:
			'Knowledgeable in C programming language, with expertise in system programming and embedded systems development.', 
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'firebase',
		color: 'yellow',
		description: 
			'Experienced in utilizing Firebase services for developing and deploying mobile and web applications, including real-time database, authentication, and hosting.',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'postgresql',
		color: 'blue',
		description:
			'Skilled in PostgreSQL for database management, with expertise in writing complex queries, optimizing performance, and ensuring data integrity.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'django',
		color: 'orange',
		description:
			'Proficient in Django web framework, leveraging its features for rapid development of scalable and maintainable web applications.',
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'flask',
		color: 'black',
		description:
			'Experienced in Flask framework for building lightweight and flexible web applications, with a focus on simplicity and extensibility.',
		logo: Assets.Flask,
		name: 'Flask'
	}),
	s({
		slug: 'nginx',
		color: 'green',
		description:
			'Knowledgeable in configuring and deploying Nginx web server for handling HTTP requests, load balancing, and acting as a reverse proxy.',
		logo: Assets.Nginx,
		name: 'Nginx'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description:
			'Proficient in Docker for containerizing and deploying applications, ensuring consistency and scalability across different environments.',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'redis',
		color: 'pink',
		description:
			'Skilled in Redis for implementing caching, message queuing, and distributed data storage solutions in web applications.',
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description:
			'Experienced in MongoDB NoSQL database for storing and managing flexible data structures, with expertise in scalability and performance optimization.',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'python',
		color: 'blue',
		description:
			'Proficient in Python programming language for web development, data analysis, and automation tasks, leveraging its simplicity and extensive standard library.',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		description:
			'Skilled in Node.js runtime environment for building scalable and high-performance network applications, including web servers and APIs.',
		logo: Assets.NodeJs,
		name: 'Nodejs'
	}),
	s({
		slug: 'bash',
		color: 'green',
		description:
			'Knowledgeable in Bash scripting for automating tasks and managing system configurations in Unix-like operating systems.',
		logo: Assets.Unknown,
		name: 'Bash'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Experienced in React.js library for building interactive user interfaces and single-page applications, focusing on component-based architecture and efficient state management.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: 
			'Skilled in Svelte framework for building highly optimized web applications, utilizing its compiler to generate efficient JavaScript code and improve performance.',
		logo: Assets.Svelte,
		name: 'Svelte'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
