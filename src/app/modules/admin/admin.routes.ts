import { Routes } from '@angular/router';

export default [
    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},
    {
        path: 'dashboard',
        loadComponent: () => import('app/modules/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('app/modules/admin/projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'contacts',
        loadComponent: () => import('app/modules/admin/contacts/contacts.component').then(m => m.ContactsComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('app/modules/admin/about/about.component').then(m => m.AboutComponent)
    }
] as Routes;
