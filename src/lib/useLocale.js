import * as nlText from '../locale/nl.json';
import * as enText from '../locale/en.json';

export default function getUseLocale() {
    const siteText = process.env.REACT_APP_LANG === 'nl' ? nlText : enText;

    const useLocale = (input) => {
        siteText[input] || console.log(`missing key in translation file: ${input}`);
        return siteText[input] || '-';
    }

    return useLocale
}