import React, { useContext } from 'react'
import Card from '../Exercice8/Card'
import { LanguageContext } from './Context/LanguageContext';

export default function Language() {
    const {language, setLanguage} = useContext(LanguageContext);
    function changeLanguage(e){
        switch (e.target.value) {
            case "Français":
                setLanguage({langue: e.target.value, pays:'FR'});
                break;
            case "English":
                setLanguage({langue: e.target.value, pays:'UK'});
                break;
            default:
                setLanguage({langue: "Français", pays:'FR'});
                break;
        }
    }
    return (
        <Card title='Context' affichage={true}>
            <h2>Langue: {language.langue} - Pays: {language.pays}</h2>
            <select value={language.langue} onChange={changeLanguage}>
                <option value="Français">
                    Français
                </option>
                <option value="English">
                    Anglais
                </option>
            </select>
        </Card>
    )
}
