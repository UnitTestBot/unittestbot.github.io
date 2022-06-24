import re
from pathlib import Path
from sys import argv

# The script removes html tags from docs.

def main(args):
    remove_tags(Path(args[1]))
    shield_liquid_tags(Path(args[1]))

# Remove HTML tags.

def shield_string(old_data: str) -> str:
    new_lines = []
    for line in old_data.split("\n"):
        if re.fullmatch(r"\s{1,4}>\s.*", line):
            for match in re.finditer(r"<.*?>", line):
                if not re.fullmatch(r".*`" + match[0] + "`.*", line):
                    line = re.sub(match[0], "`" + match[0] + "`", line)
        new_lines.append(line)
    new_data = "\n".join([line for line in new_lines])
    return new_data


def remove_tag_details_and_summary(old_data: str) -> str:
    new_lines = []
    for line in old_data.split("\n"):
        if re.fullmatch(r"</?details>.*", line):
            continue
        if re.fullmatch(r"\s*<summary>.*</summary>.*", line):
            line = re.sub(r"\s*<summary>", r"###### ", line)
            line = re.sub(r"</summary>.*", r"", line)
        new_lines.append(line)
    new_data = "\n".join([line for line in new_lines])
    return new_data


def remove_tags(directory: Path):
    for file in Path(directory).glob("**/*.md"):
        with open(file, "r") as fi:
            old_data = fi.read()

        new_data = shield_string(old_data)
        new_data = remove_tag_details_and_summary(new_data)

        with open(file, "w") as fi:
            fi.write(new_data)

# Shielding Liquid tags (in order to deploy on github pages): double curly braces.

def shield_double_brackets(lines_for_update: list):
    check = False
    for line in lines_for_update:
        if re.fullmatch(r".*{\s*{.*", line):
            check = True
            break

    if check:
        lines_for_update.append("[//]:# ({% endraw %})")
        lines_for_update.insert(0, "[//]: # ({% raw %})")
        lines_for_update.insert(0, "-->")
        lines_for_update.insert(0, "The tag below is used in order to avoid Liquid exception when deploy on gh pages.")
        lines_for_update.insert(0, "<!--")

    return lines_for_update

def find_and_shield_double_brackets(old_data: str) -> str:
    new_lines = []
    lines_for_check = []
    count_quotes = 0
    for line in old_data.split("\n"):
        if re.fullmatch(r"```.*", line):
            count_quotes = (count_quotes + 1) % 2
            lines_for_check.append(line)
        elif count_quotes:
            lines_for_check.append(line)
        else:
            new_lines += shield_double_brackets(lines_for_check)
            lines_for_check = []
            new_lines.append(line)
    if lines_for_check:
        new_lines += shield_double_brackets(lines_for_check)
    new_data = "\n".join([line for line in new_lines])

    return new_data

def shield_liquid_tags(directory: Path):
    for file in Path(directory).glob("**/*.md"):
        with open(file, "r") as fi:
            old_data = fi.read()

        new_data = find_and_shield_double_brackets(old_data)

        with open(file, "w") as fi:
            fi.write(new_data)


if __name__ == "__main__":
    main(argv)
