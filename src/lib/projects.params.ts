import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'ansible-project',
		color: '#5e95e3',
		description: 'A project using ansible to manage debian and redhat distributions of web, database and file servers',
		shortDescription: 'Ansible Playbook for managing web, file and db servers',
		links: [{ to: 'https://github.com/daviesbrown/ingryd_ansible_project', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Ansible Project',
		period: {
			from: new Date()
		},
		skills: getSkills('ansible', 'ssh'),
		type: 'Configuration Management'
	},
	{
		slug: 'social-connect-api',
		color: 'green',
		description: 'A social media API clone',
		shortDescription: 'A social media API clone',
		links: [{ to: 'https://github.com/daviesbrown/social-connect-api', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Social Connect API',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Social API'
	},
	{
		slug: 'short-me',
		color: 'red',
		description: 'A website for abstracting links and making it shorter',
		shortDescription: 'A website for abstracting links and making it shorter',
		links: [{ to: 'https://github.com/daviesbrown/short-me', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Short Me',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'js', 'docker'),
		type: 'Short Link'
	},
	{
		slug: 'simple-shell',
		color: 'yellow',
		description: 'A basic unix shell',
		shortDescription: 'A basic unix shell',
		links: [{ to: 'https://github.com/daviesbrown/simple_shell', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Simple Shell',
		period: {
			from: new Date()
		},
		skills: getSkills('c'),
		type: 'Infra Tooling'
	},
	{
		slug: 'weekly-backup-script',
		color: '#5e95e3',
		description: 'Makes a backup of documents and system stats and database and sends the result to your email',
		shortDescription: 'Makes a backup of documents and system stats and database and sends the result to your email',
		links: [{ to: 'https://github.com/daviesbrown/weekly_backup_report', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Weekly Backup Script',
		period: {
			from: new Date()
		},
		skills: getSkills('linux', 'bash'),
		type: 'Linux Admininstration'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export default MY_PROJECTS;
