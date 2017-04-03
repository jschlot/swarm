export const pluralizer = (count, word, fallback) => {
    switch (count) {
        case 0:
            return fallback;
        case 1:
            return `${count} ${word}`;
        default:
            return `${count} ${word}s`;
    }
};

export const countOf = (array) => {
    return array && array.length || 0;
};
