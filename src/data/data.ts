import ImageCart from '../assets/images/Rectangle 4.jpg';
import ImageCart2 from '../assets/images/Rectangle 12.jpg';
import ImageCart3 from '../assets/images/Rectangle 13.jpg';
import ImageCart4 from '../assets/images/Rectangle 14.jpg';
import ImageCart5 from '../assets/images/Rectangle 6.jpg';
import ImageCart6 from '../assets/images/Rectangle 8.jpg';

//Types
export type TabStatusType = 'all' | 'landing' | 'react' | 'spa';

//Data
export interface DataMenu {
  id: number;
  title: string;
  href: string;
}
export const DataMenuItems: Array<DataMenu> = [
  { id: 0, title: 'Home', href: 'home' },
  { id: 1, title: 'About', href: 'about' },
  { id: 2, title: 'Tech', href: 'skills' },
  { id: 3, title: 'Stack', href: 'skills' },
  { id: 4, title: 'Projects', href: 'projects' },
  { id: 5, title: 'Contact', href: 'contact' },
];

export const DataTabs: Array<{ status: TabStatusType; title: string; id: number }> = [
  { id: 0, title: 'All', status: 'all' },
  { id: 1, title: 'Landing page', status: 'landing' },
  { id: 2, title: 'React', status: 'react' },
  { id: 3, title: 'SPA', status: 'spa' },
];
export const dataWorksList = [
  {
    id: 0,
    name: 'Junior Web Developer',
    typeEmployment: 'Full Time',
    company: 'Dr. Rajkumar’s Learning App',
    city: 'Bengaluru',
    time: 'Dec 2021 - Dec 2022',
  },
  {
    id: 1,
    name: 'Web Development Intern',
    typeEmployment: 'Internship',
    company: 'IonPixelz Web Solutions',
    city: 'Oslo',
    time: 'Sep 2021 - Dec 2021',
  },
  {
    id: 2,
    name: 'SEO / SEM Specialist',
    typeEmployment: 'Full Time',
    company: 'HASPS',
    city: 'Minsk',
    time: 'Sep 2020 - Sep 2021',
  },
];
export const dataEducationList = [
  {
    id: 0,
    name: 'Bachelor in Electronics & Communication',
    typeEmployment: 'Full Time',
    company: 'Bangalore Instutute of Technology',
    city: 'Bengaluru',
    time: 'Aug 2015 - Dec 2020',
  },
];

export const DataIconSkills = [
  { id: 0, iconId: 'htm-icon' },
  { id: 1, iconId: 'js-icon' },
  { id: 2, iconId: 'tailwind' },
  { id: 3, iconId: 'vscode' },
  { id: 4, iconId: 'sass-icon' },
  { id: 5, iconId: 'react-icon' },
  { id: 6, iconId: 'git-icon' },
  { id: 7, iconId: 'css-icon' },
  { id: 8, iconId: 'Redux' },
  { id: 9, iconId: 'styled' },
];
export const DataProjects = [
  {
    id: 0,
    src: ImageCart,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    itemStack: 'HTML, JavaScript, SASS, React',
    link: '#',
    linkCode: '#',
    type: 'spa',
  },
  {
    id: 1,
    src: ImageCart2,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    itemStack: 'HTML, JavaScript, SASS, React',
    link: '#',
    linkCode: '#',
    type: 'react',
  },
  {
    id: 2,
    src: ImageCart3,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    itemStack: 'HTML, JavaScript, SASS, React',
    link: '#',
    linkCode: '#',
    type: 'landing',
  },
  {
    id: 3,
    src: ImageCart4,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    itemStack: 'HTML, JavaScript, SASS, React',
    link: '#',
    linkCode: '#',
    type: 'react',
  },
  {
    id: 4,
    src: ImageCart5,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    itemStack: 'HTML, JavaScript, SASS, React',
    link: '#',
    linkCode: '#',
    type: 'spa',
  },
  {
    id: 5,
    src: ImageCart6,
    title: 'Project Tile goes here',
    text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    itemStack: 'HTML, JavaScript, SASS, React',
    link: '#',
    linkCode: '#',
    type: 'react',
  },
];
