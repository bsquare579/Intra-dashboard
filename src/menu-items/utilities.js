// assets
import { IconUsers, IconBolt, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconUsers,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconBolt
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const users = {
    id: 'users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users/users',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'providers',
            title: 'Providers',
            type: 'item',
            url: '/users/providers',
            icon: icons.IconBolt,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'table',
                    title: 'Table',
                    type: 'item',
                    url: '/icons/table',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default users;
