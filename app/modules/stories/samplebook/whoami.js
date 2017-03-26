import { ALIGNMENTS } from '../constants';

export const WHOAMI = {
    id: 'whoami',
    title: 'Who Am I?',
    description: 'You begin the encounter',
    start: 'introduction',
    chapters: {
        'introduction': {
            id: 'introduction',
            title: 'where am i?',
            plot: 'the character wakes up',
            body: {
                default: [
                    'your eyes blur into focus, and you can see that you are deep inside of a tunnel, with no end in sight'
                ]
            },
            options: [
                {
                    idx: 0,
                    text: 'wake up',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    next: 'choice one'
                }
            ]
        },
        'the end': {
            id: 'the end',
            title: 'saying goodbye',
            plot: 'the end of the story',
            body: {
                default: [
                    'you make it to an army hospital, and back to civilization.'
                ],
                [ALIGNMENTS.EVIL]: [
                    'sadly, the little girl dies suddenly. you never even got to know her name.'
                ]
            },
            options: []
        },
        'choice one': {
            id: 'choice one',
            title: 'with a whisper',
            plot: 'find out if you are lawful or chaotic',
            body: {
                default: [
                    'you open your eyes, and lift yourself off the ground. ',
                    'looking around, you see a small child curled against the wall, shivering.'
                ]
            },
            options: [
                {
                    idx: 0,
                    text: 'approach the girl cautiously',
                    alignment: ALIGNMENTS.LAWFUL,
                    weight: 2,
                    next: 'approach child'
                },
                {
                    idx: 1,
                    text: 'try to back away, without saying anything',
                    alignment: ALIGNMENTS.CHAOTIC,
                    weight: 2,
                    next: 'approach child'
                }
            ]
        },
        'approach child': {
            id: 'approach child',
            title: 'will you feed the girl',
            plot: 'find out if you are good or evil',
            body: {
                [ALIGNMENTS.CHAOTIC]: [
                    'she walks up to you anyway, and smiles at you, asking with her eyes for help.'
                ],
                default: [
                    '"could you find me some food? I haven\'t eaten in so long", she says quietly.'
                ]
            },
            options: [
                {
                    idx: 0,
                    text: 'offer her your last bit of food',
                    alignment: ALIGNMENTS.GOOD,
                    weight: 3,
                    next: 'the end'
                },
                {
                    idx: 1,
                    text: '(lie) tell her you don\'t have any food',
                    alignment: ALIGNMENTS.EVIL,
                    weight: 3,
                    next: 'the end'
                }
            ]

        }
    }
};
