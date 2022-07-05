import React, { Component } from 'react';
import { Link } from 'gatsby';
import { TreeView } from '@progress/kendo-react-treeview';
import "./sidebar.css";

import {
    persistToLocalStorage,
    restoreFromLocalStorage,
} from '../utils/local-storage-helper';

const ITEMS_IN_STORAGE = ['expandedItems'];

const NavItem = ({ item }) => {
    if (!item.directory) {
        return (
            <Link className="navig navig-link" to={item.path}>
                {item.title}
            </Link>
        );
    }

    return <p className="navig navig-directory">{item.directory}</p>;
};


class NavTree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tree: [],
            expandedItems: [],
        };

        this.kendoConvert = this.kendoConvert.bind(this);
        this.convertTreeToKendoTree = this.convertTreeToKendoTree.bind(this);
        this.collapseChildrenItems = this.collapseChildrenItems.bind(this);
        this.updateTree = this.updateTree.bind(this);
        this.toggleItemExpansion = this.toggleItemExpansion.bind(this);
    }

    async componentDidMount() {
        try {
            await this.restoreStateKeysFromStorage();
        } catch (e) {
            console.warn('Could not restore localstorage', e);
        }
        this.updateTree();
    }

    async restoreStateKeysFromStorage() {
        return await Promise.all(
            ITEMS_IN_STORAGE.map(key => {
                const data = restoreFromLocalStorage(key);

                return new Promise(async (resolve, reject) => {
                    if (data) {
                        this.setState(
                            {
                                [key]: data,
                            },
                            resolve
                        );
                    } else if (data === null) {
                        // There was no data to retrieve
                        resolve();
                    } else {
                        // Some error has occurred
                        reject();
                    }
                });
            })
        );
    }

    storeStateKeysInStorage() {
        ITEMS_IN_STORAGE.forEach(key =>
            persistToLocalStorage(key, this.state[key])
        );
    }

    updateTree(actions = []) {
        this.setState(
            { tree: this.kendoConvert(actions) },
            this.storeStateKeysInStorage
        );
    }

    collapseChildrenItems({ directory }) {
        if (directory) {
            this.setState(
                state => ({
                    expandedItems: state.expandedItems.filter(
                        item => !item.ancestors.includes(directory)
                    ),
                }),
                this.updateTree
            );
        }
    }

    toggleItemExpansion({ item }) {
        if (item.directory) {
            const { expandedItems } = this.state;
            const key = item.directory;
            const included = !!expandedItems.find(
                ({ directory }) => directory === key
            );

            this.setState(
                {
                    expandedItems: included
                        ? expandedItems.filter(({ directory }) => directory !== key)
                        : [...expandedItems, { directory: key, ancestors: item.ancestors }],
                },
                () => {
                    if (included) {
                        // The item is being collapsed, collapse its children and then update the tree
                        this.collapseChildrenItems(item);
                    } else {
                        // The item has been expanded, update the tree
                        this.updateTree();
                    }
                }
            );
        }
    }

    kendoConvert(actions = []) {
        const { tree } = this.props;

        return tree[0]
            ? tree[0].links.map(item =>
                this.convertTreeToKendoTree(item, [], actions)
            )
            : [];
    }

    convertTreeToKendoTree(item, parentAncestors = [], actions = []) {
        const { expandedItems } = this.state;
        const opened = !!expandedItems.find(
            ({ directory }) => directory === item.directory
        );
        const childAncestors = item.directory
            ? [...parentAncestors, item.directory]
            : parentAncestors;

        const node = {
            text: item.directory ? item.directory : item.title,
            opened,
            items: Array.isArray(item.links)
                ? item.links.map(childItem =>
                    this.convertTreeToKendoTree(childItem, childAncestors, actions)
                )
                : [],
            ancestors: parentAncestors,
            ...item,
        };

        return actions.reduce((mutatedNode, fn) => fn(mutatedNode), node);
    }

    render() {
        const { tree } = this.state;

        return (
            <div className={this.props.className}>
                <h4
                    style={{
                        marginLeft: '1.45rem',
                        marginBottom: '2.5rem',
                        marginTop: '1rem'
                    }}
                >
                    Docs
                </h4>
                <TreeView
                    data={tree}
                    textField="text"
                    expandField="opened"
                    itemRender={NavItem}
                    expandIcons={true}
                    onExpandChange={this.toggleItemExpansion}
                    onItemClick={this.toggleItemExpansion}
                />
            </div>
        );
    }
}

NavTree.defaultProps = {
    tree: [],
};

export { NavTree };