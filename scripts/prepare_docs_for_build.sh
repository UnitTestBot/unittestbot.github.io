#!/bin/bash

rm -r "../Wiki" --force

git clone https://github.com/UnitTestBot/UTBotCpp.wiki.git "../Wiki"

python3 add_gatsby_header_to_md_files.py "../Wiki" "../src/docs"

python3  remove_html_tags_from_md_files.py "../src/docs"

rm "../src/docs/_Sidebar.md"

# Remove Wiki in order to build site
# (or gatsby-mdx-plugin will try to parse Wiki's md files with html tags)

rm -r "../Wiki" --force