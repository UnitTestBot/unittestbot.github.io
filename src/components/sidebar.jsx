import React from 'react';

import { NavTree } from './navtree';

const data = [
    {
        directory: 'Docs',
        links: [
            {
                directory: 'UTBot C/C++',
                links: [
                    {
                        directory: 'General',
                        links: [
                            {
                                path: '/docs/cpp/general/home',
                                title: 'Home'
                            },
                            {
                                path: '/docs/cpp/general/sys-requirements',
                                title: 'System Requirements'
                            }
                        ]
                    },
                    {
                        directory: 'Installation',
                        links: [
                            {
                                path: '/docs/cpp/installation/installing-the-utbot-server',
                                title: 'Installing and Setting Up the UTBot Server'
                            },
                            {
                                path: '/docs/cpp/installation/installing-the-vs-code-plugin',
                                title: 'Installing the VS Code Plugin'
                            },
                            {
                                path: '/docs/cpp/installation/use-cases',
                                title: 'UTBot Use Cases'
                            }
                        ]
                    },
                    {
                        directory: 'Usage',
                        links: [
                            {
                                path: '/docs/cpp/usage/step-by-step',
                                title: 'Step by step'
                            },
                            {
                                path: '/docs/cpp/usage/wizard',
                                title: 'Quickstart with UTBot Wizard'
                            },
                            {
                                path: '/docs/cpp/usage/statusbar-icons',
                                title: 'Statusbar Icons'
                            },
                            {
                                path: '/docs/cpp/usage/vscode-plugin',
                                title: 'VS Code plugin'
                            },
                            {
                                path: '/docs/cpp/usage/vscode-extension-settings',
                                title: 'VS Code Extension Settings'
                            },
                            {
                                path: '/docs/cpp/usage/configuring',
                                title: 'Configuring Project'
                            },
                            {
                                path: '/docs/cpp/usage/generating',
                                title: 'Generating Tests'
                            },
                            {
                                path: '/docs/cpp/usage/format-tests',
                                title: 'Formatting Tests'
                            },
                            {
                                path: '/docs/cpp/usage/run-generated-tests',
                                title: 'Run Generated Tests'
                            },
                            {
                                path: '/docs/cpp/usage/stubs',
                                title: 'Stubs'
                            },
                            {
                                path: '/docs/cpp/usage/cli',
                                title: 'Command Line Interface'
                            },
                            {
                                path: 'docs/cpp/usage/docker-free-utbot-in-wsl2',
                                title: 'Docker-free UTBot in WSL2'
                            },
                            {
                                path: '/docs/cpp/usage/CodeAnalyzer',
                                title: 'UTBotCpp Code Analyzer'
                            }
                        ]
                    },
                    {
                        directory: 'Advanced',
                        links: [
                            {
                                path: '/docs/cpp/advanced/utbot-inside',
                                title: 'How UTBot Works'
                            },
                            {
                                path: '/docs/cpp/advanced/makefiles',
                                title: 'Makefiles'
                            },
                            {
                                path: '/docs/cpp/advanced/symbolic-stdin',
                                title: 'Symbolic Stdin'
                            },
                            {
                                path: '/docs/cpp/advanced/utbot-logging',
                                title: 'UTBot Logging Principles'
                            },
                            {
                                path: '/docs/cpp/advanced/targets',
                                title: 'Targets'
                            },
                            {
                                path: '/docs/cpp/advanced/compile-database',
                                title: 'Compile database'
                            },
                            {
                                path: '/docs/cpp/advanced/coverage',
                                title: 'Coverage'
                            },
                            {
                                path: '/docs/cpp/advanced/generating-and-running-tests',
                                title: 'Generating and running tests'
                            },
                            {
                                path: '/docs/cpp/advanced/incrementality',
                                title: 'Incrementality'
                            },
                            {
                                path: '/docs/cpp/advanced/linking-bitcode',
                                title: 'Linking bitcode'
                            },
                            {
                                path: '/docs/cpp/advanced/preparing-sources-for-klee',
                                title: 'Preparing sources for KLEE'
                            },
                            {
                                path: '/docs/cpp/advanced/stubs-inside',
                                title: 'Stubs inside'
                            },
                            {
                                path: '/docs/cpp/advanced/klee-patches',
                                title: 'KLEE patches'
                            },
                            {
                                path: '/docs/cpp/advanced/c-syntax',
                                title: 'Supported C Syntax'
                            },
                            {
                                path: '/docs/cpp/advanced/cpp-syntax',
                                title: 'Supported C++ Syntax'
                            }
                        ]
                    },
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
                        path: '/docs/cpp/faq',
                        title: 'FAQ'
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
                                path: '/docs/java/general/home',
                                title: 'Home'
                            }
                        ]
                    },
                    {
                        directory: 'Installation',
                        links: [
                            {
                                path: '/docs/java/installation/intellij-idea-plugin',
                                title: 'IntelliJ IDEA plugin'
                            }
                        ]
                    },
                    {
                        directory: 'Usage',
                        links: [
                            {
                                path: '/docs/java/usage/generate-tests-with-plugin',
                                title: 'Generate tests with plugin'
                            },
                            {
                                path: '/docs/java/usage/labels-usage-guidelines',
                                title: 'Labels usage guidelines'
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
