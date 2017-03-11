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
            title: 'with a whisper',
            body: 'optional text',
            decisions: ['001'],
            endings: {
                [ALIGNMENTS.GOOD]: 'thanks mister! i must have fallen asleep while waiting for my parents.',
                default: 'the little girl wakes up, and walks up to you. she tugs at your sleeve as if the wants to thank you for being there.'
            }
        },
        {
            title: 'an unexpected friend',
            decisions: [
                '002'
            ],
            endings: {
                [ALIGNMENTS.EVIL]: 'that\'s ok, my mommy taught me to wait for supper.',
                [ALIGNMENTS.GOOD]: 'thank you, mister. what is your name? let\'s be friends.',
            }
        }
    ],
    decision: {
        '001': {
            id: '001',
            text: 'you open your eyes, and lift yourself off the ground. looking around, you see a small child curled against the wall, shivering.',
            options: [
                {
                    text: 'approach child',
                    alignment: ALIGNMENTS.GOOD
                },
                {
                    text: 'find an exit, fast',
                    alignment: ALIGNMENTS.CHAOTIC
                }
            ]
        },
        '002': {
            id: '002',
            text: '"could you find me some food? I haven\'t eaten in so long", she says quietly.',
            options: [
                {
                    text: 'offer her your last bit of food',
                    alignment: ALIGNMENTS.GOOD
                },
                {
                    text: '(lie) tell her you don\'t have any food',
                    alignment: ALIGNMENTS.EVIL
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
