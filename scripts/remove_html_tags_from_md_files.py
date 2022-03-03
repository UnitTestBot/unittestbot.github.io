import re
from pathlib import Path
from sys import argv

# The script removes html tags from docs.

def main(args):
    remove_tags(Path(args[1]))


def shielding_string(old_data: str) -> str:
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

        new_data = shielding_string(old_data)
        new_data = remove_tag_details_and_summary(new_data)

        with open(file, "w") as fi:
            fi.write(new_data)


if __name__ == "__main__":
    main(argv)