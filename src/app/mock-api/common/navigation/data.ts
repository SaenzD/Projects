/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:squares-2x2',
        link : 'app/dashboard'
    },
    {
        id   : 'projects',
        title: 'Projects',
        type : 'basic',
        icon : 'heroicons_outline:clipboard',
        link : 'app/projects'
    },
    {
        id   : 'contacts',
        title: 'Contacts',
        type : 'basic',
        icon : 'heroicons_outline:phone',
        link : 'app/contacts'
    },
    {
        id   : 'about',
        title: 'About',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : 'app/about'
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
