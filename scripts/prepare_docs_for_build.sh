#!/bin/bash

SCRIPT_DIR="$(dirname -- ${BASH_SOURCE[0]:-$0})"
WIKI_DIR=${SCRIPT_DIR}/../Wiki
DOCS_DIR=${SCRIPT_DIR}/../src/docs

if [[ -d "$WIKI_DIR" ]]
then
    rm -rf "$WIKI_DIR"
fi

git clone https://github.com/UnitTestBot/UTBotCpp.wiki.git "$WIKI_DIR"

python3 "${SCRIPT_DIR}/add_gatsby_header_to_md_files.py" "$WIKI_DIR" "$DOCS_DIR"
python3 "${SCRIPT_DIR}/prepare_md_files_for_gatsby.py" "$DOCS_DIR"
python3 "${SCRIPT_DIR}/create_sidebar.py" "${DOCS_DIR}"

rm -rf "$DOCS_DIR/_Sidebar.md"
rm -rf "$DOCS_DIR/Labels-usage-guidelines.md"

# Remove Wiki in order to build site
# (or gatsby-mdx-plugin will try to parse Wiki's md files with html tags)
rm -rf "$WIKI_DIR"