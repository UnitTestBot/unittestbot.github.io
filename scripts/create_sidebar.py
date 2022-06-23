import re
from pathlib import Path
from sys import argv


def get_name_from_file(file: Path):
    with open(file) as fi:
        for line in fi.read().split("\n"):
            if re.fullmatch(r"name:.*", line):
                name = line.split(": ")[1]
                return name


def get_data_from_sidebar(directory: Path):
    list_directories = []
    with open(directory / "_Sidebar.md") as fi:
        dir_name = ""
        for line in fi.read().split("\n"):
            if re.fullmatch(r".*[.*].*(.*).*", line):
                file = line.split("(")[1].split(")")[0] + ".md"
                file_name = get_name_from_file(directory / dir_name.lower() / file)
                list_directories[-1]["menu"].append(file_name)
            elif re.fullmatch(r"###.*", line) and line.split("[")[0] != line:
                file = line.split("(")[1].split(")")[0] + ".md"
                file_name = get_name_from_file(directory / file)
                list_directories.append(file_name)
            elif re.fullmatch(r"###.*", line):
                dir_name = line[4:]
                list_directories.append({"name": dir_name, "menu": []})
            else:
                continue
    return list_directories


def create_data_in_doczrc(list_directories: list):
    lines = ['export default {',
             '  title: "UnitTestBot",',
             '  base: "docs/cpp/",',
             '  public: "./resources",',
             '  ignore: ["**/blog/**", "readme.md", "README.md"],',
             '  menu: [',
             ]
    for dict_dir in list_directories:
        if isinstance(dict_dir, str):
            lines.append('    "' + dict_dir + '",')
            continue
        lines.append("    {")
        lines.append('      name: "' + str(dict_dir["name"]) + '",')
        lines.append("      menu: [")
        for name_file in dict_dir["menu"]:
            lines.append('        "' + str(name_file) + '",')
        lines.append("      ],")
        lines.append("    },")
    lines.append("  ],")
    lines.append("};")

    return "\n".join([line for line in lines])


def create_file_doczrc(directory: Path):
    list_directories = get_data_from_sidebar(directory)
    data_to_doczrc = create_data_in_doczrc(list_directories)
    with open(directory.parent.parent/ "doczrc.js", "w") as fi:
        fi.write(data_to_doczrc)


def main(args):
    create_file_doczrc(Path(args[1]))


if __name__ == "__main__":
    main(argv)