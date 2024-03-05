import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor of Engineering, Chemical Engineering',
		description: '4.4/5 Second Class Upper',
		location: 'Nigeria',
		logo: Assets.Unknown,
		name: '',
		organization: 'NAU',
		period: { from: new Date(2017, 0, 1), to: new Date(2021, 12, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ''
	},
	{
		degree: 'Back-End Software Engineering',
		description: '',
		location: 'Lagos',
		logo: Assets.Unknown,
		name: '',
		organization: 'ALX',
		period: { from: new Date(2022, 11, 1), to: new Date(2023, 12, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English', 'Algorithms and Data structures']
	}
];
