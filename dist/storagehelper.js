export function saveSettings(key, settings) {
    try {
        localStorage.setItem(key, JSON.stringify(settings));
    }
    catch (exception) {
        throw new Error(exception);
    }
}
export function getSettings(key) {
    try {
        let data = localStorage.getItem(key);
        if (!data)
            return undefined;
        let parsed = JSON.parse(data);
        if (!parsed)
            return undefined;
        return parsed;
    }
    catch (exception) {
        return undefined;
    }
}
