export const NAME = 'story';

export const ALIGNMENTS = {
    LAWFUL: 'lawful',
    CHAOTIC: 'chaotic',

    GOOD: 'good',
    EVIL: 'evil',

    NEUTRAL: 'neutral'
};

export const BOOK = {
    chapter: [
        {
            idx: 0,
            title: 'time to make your mark',
            body: 'these are your first decisions. try not to make too many mistakes. but try not to be too stressed about it, either...',
            decisions: [
                '001', '002'
            ]
        },
        {
            idx: 1,
            title: 'quick eyesight test',
            body: 'this is your second decision. you are doing well so far...',
            decisions: [
                '003', '004'
            ]
        }
    ],
    decision: {
        '001': {
            id: '001',
            text: 'what is your favorite color?',
            options: [
                {
                    text: 'crimson',
                    alignment: ALIGNMENTS.CHAOTIC
                },
                {
                    text: 'azure',
                    alignment: ALIGNMENTS.NEUTRAL
                },
                {
                    text: 'amber',
                    alignment: ALIGNMENTS.LAWFUL
                },
                {
                    text: 'charcoal',
                    alignment: ALIGNMENTS.CHAOTIC
                }
            ]
        },
        '002': {
            id: '002',
            text: 'which do you prefer?',
            options: [
                {
                    text: 'left',
                    alignment: ALIGNMENTS.CHAOTIC
                },
                {
                    text: 'center',
                    alignment: ALIGNMENTS.NEUTRAL
                },
                {
                    text: 'right',
                    alignment: ALIGNMENTS.LAWFUL
                }
            ]
        },
        '003': {
            id: '003',
            text: 'which do you prefer?',
            options: [
                {
                    text: 'light',
                    alignment: ALIGNMENTS.GOOD
                },
                {
                    text: 'dark',
                    alignment: ALIGNMENTS.EVIL
                }
            ]
        },
        '004': {
            id: '004',
            text: 'what is your ideal holiday?',
            options: [
                {
                    text: 'beach',
                    alignment: ALIGNMENTS.GOOD
                },
                {
                    text: 'forest',
                    alignment: ALIGNMENTS.NEUTRAL
                },
                {
                    text: 'desert',
                    alignment: ALIGNMENTS.EVIL
                }
            ]
        }
    }
};
