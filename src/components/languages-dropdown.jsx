import * as React from "react"

import { Language, languageToString } from "../utils/language";

const [showLanguages, setShowLanguages] = useState(false);

const showDropdownLanguages = () => {
    setShowLanguages(true);
};
const hideDropdownLanguages = () => {
    setShowLanguages(false);
};

export const LanguageDropdown = ({ onLanguageClick }) => {
    return (
        <NavDropdown
            title={langName}
            show={showLanguages}
            onMouseEnter={showDropdownLanguages}
            onMouseLeave={hideDropdownLanguages}
            style={{ marginTop: "5px", width: "fit-content" }}
        >
            {Object.values(Language).map(language => (
                <NavDropdown.Item onClick={() => onLanguageClick(language)}
                > {languageToString(language)} </NavDropdown.Item>
            ))}
        </NavDropdown>

    )
}