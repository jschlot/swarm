export const NAME = 'story';

export const ALIGNMENTS = {
    LAWFUL: 'lawful',
    CHAOTIC: 'chaotic',
    GOOD: 'good',
    EVIL: 'evil',
    NEUTRAL: 'neutral'
};

export const BOOK = {
    theme: {
        backgroundVideo: 'https://pixabay.com/en/videos/download/video-447_medium.mp4'
    },
    chapter: [
        {
            title: 'where am i?',
            body: [
                'darkness, a vague sound, almost like a hum, but deep inside you. ',
                'your head vibrates and throbs painfully'
            ],
            decisions: [],
            endings: {}
        },
        {
            title: 'with a whisper',
            decisions: ['001', '002'],
            endings: {
                [ALIGNMENTS.GOOD]: 'thanks mister! i must have fallen asleep while waiting for my parents.',
                default: 'that\'s ok, my mommy taught me to wait for supper.'
            }
        },
        {
            title: 'an unexpected friend',
            body: [
                'the little girl wakes up, and walks up to you. ',
                'she tugs at your sleeve as if the wants to thank you for being there.'
            ],
            decisions: [],
            endings: {}
        },
        {
            title: 'run for your life',
            body: 'hand in hand you run through a grassy field.',
            decisions: ['003'],
            endings: {}
        }
    ],
    outcome: {
        [ALIGNMENTS.EVIL]: 'sadly, the little girl dies suddenly. you never even got to know her name.',
        default: 'you make it to an army hospital, and back to civilization.',
    },
    decision: {
        '001': {
            id: '001',
            text: [
                'you open your eyes, and lift yourself off the ground. ',
                'looking around, you see a small child curled against the wall, shivering.'
            ],
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
        }
    }
};
