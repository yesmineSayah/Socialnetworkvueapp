import Index from '../../components/user/projects/Index';
import New from '../../components/user/projects/New';
import Details from '../../components/user/projects/Details';
import Edit from '../../components/user/projects/Edit';
export default [{
        path: '',
        name: 'indexprojects',
        component: Index
    },
    {
        path: 'new',
        name: 'newprojects',
        component: New
    },
    {
        path: ':id',
        name: 'detailsprojects',
        component: Details
    },
    {
        path: ':id/edit',
        name: 'editprojects',
        component: Edit
    }
]