export const pluralizer = (count, word) => {
    switch (count) {
        case 0:
            return 'coming soon';
        case 1:
            return `${count} ${word}`;
        default:
            return `${count} ${word}s`;
    }
};
