import React from 'react';
import {StaticQuery, graphql, useStaticQuery} from 'gatsby';

import { NavTree } from './navtree';
import './sidebar.css';

const data = [
    {
        directory: 'Docs',
        links: [
            {
                directory: 'UTBot C/C++',
                links: [
                    {
                        directory: 'Develop',
                        links: [
                            {
                                path: '/docs/cpp/develop/todo',
                                title: 'ToDo'
                            },
                            {
                                path: '/docs/cpp/develop/troubleshooting',
                                title: 'Troubleshooting'
                            }
                        ]
                    },
                    {
                        directory: 'General',
                        links: [
                            {

                                path: '/docs/cpp/general/introduction',
                                title: 'Introduction'
                            },
                            {
                                path: '/docs/cpp/general/system-requirements',
                                title: 'System Requirements'
                            }
                        ]
                    },
                    {
                        path: '/docs/cpp/faq',
                        title: 'Faq'
                    }
                ]
            },
            {
                directory: 'UTBot Java',
                links: [
                    {
                        directory: 'General',
                        links: [
                            {

                                path: '/docs/cpp/general/introduction',
                                title: 'Introduction'
                            },
                            {
                                path: '/docs/cpp/general/system-requirements',
                                title: 'System Requirements'
                            }
                        ]
                    },
                ]
            },
            {
                directory: 'UTBot Python',
                links: [
                    {
                        directory: 'General',
                        links: [
                            {

                                path: '/docs/cpp/general/introduction',
                                title: 'Introduction'
                            },
                            {
                                path: '/docs/cpp/general/system-requirements',
                                title: 'System Requirements'
                            }
                        ]
                    },
                    {
                        directory: 'Installation',
                        links: [
                            {

                                path: '/docs/cpp/general/introduction',
                                title: 'Introduction'
                            },
                            {
                                path: '/docs/cpp/general/system-requirements',
                                title: 'System Requirements'
                            }
                        ]
                    },
                ]
            }
        ]
    }
];

const Sidebar = ({ className }) => (
    <>
        <NavTree tree={data} className={className} />
    </>
);

export default Sidebar;
