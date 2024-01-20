var en = require("./translations.en.json");
var fr = require("./translations.fr.json");
var it = require("./translations.it.json");

const i18n = {
    translations: {
        en,
        fr,
        it
    },
    defaultLang: "en",
    useBrowserDefault: true,
    // optional property will default to "query" if not set
    languageDataStore: "localStorage",
};

module.exports = i18n;