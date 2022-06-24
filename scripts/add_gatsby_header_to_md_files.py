import shutil
from pathlib import Path
from sys import argv

# The script converts Wiki to gatsby recognizable format adding gatsby header.

def main(argv):
    wiki_transfer(Path(argv[1]), Path(argv[2]))

def get_head_from_data(data: str) -> dict:
    lines = data.split("\n")

    if lines[0] != "<!---":
        return {}

    head_dict = {}
    for line in lines:
        if line == "<!---":
            continue
        if line == "--->":
            break

        head_dict[line.split(":")[0]] = line.split(":")[1].strip(" ")

    return head_dict


def create_new_head(head: dict, file: Path, work_dir: Path) -> dict:
    new_head = {
        "name": create_name(head.get("name"), file),
        "route": create_route(head.get("route"), file, work_dir.name),
        "parent": "Documentation",
        "menu": create_menu(head.get("menu"), file),
        "description": create_description(head.get("description")),
    }

    if new_head["menu"].lower() == str(work_dir.name):
        new_head.pop("menu")

    return new_head


def create_name(name: str, file: Path) -> str:
    if name:
        return name
    return str(Path(file).name).split(".")[0].capitalize()


def create_route(route: str, file: Path, new_dir: Path) -> str:
    if route:
        return route

    path = file
    while str(path).find(new_dir) != -1:
        path = path.parent

    return "/" + str(Path("docs", "cpp", file.relative_to(path / new_dir))).split(".")[0]


def create_menu(menu: str, file: Path) -> str:
    if menu:
        return menu
    return str(Path(file).parent.name).capitalize()


def create_description(description: str) -> str:
    if description:
        return description
    return "No description"


def create_new_data(old_data: str) -> str:
    if old_data.split("\n")[0] != "<!---":
        return "\n\n" + old_data

    return old_data[(old_data.find("--->") + 4):]


def get_text_from_dict(head_dict: dict) -> str:
    head_text = "\n".join(
        [f"{key}: {value}" for key, value in head_dict.items()]
    )
    return head_text


def wiki_transfer(old_dir: Path, new_dir: Path):
    try:
        shutil.rmtree(new_dir)
    except FileNotFoundError:
        pass
    shutil.copytree(old_dir, new_dir)

    for file in Path(new_dir).glob("**/*.md"):
        with open(file, "r") as fi:
            old_data = fi.read()

        old_head_dict = get_head_from_data(old_data)
        new_head_dict = create_new_head(old_head_dict, file, new_dir)
        new_data = create_new_data(old_data)

        with open(file, "w") as fi:
            fi.writelines("---\n")
            fi.write(get_text_from_dict(new_head_dict))
            fi.writelines("\n---")
            fi.write(new_data)

if __name__ == "__main__":
    main(argv)
