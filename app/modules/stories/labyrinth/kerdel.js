import { ALIGNMENTS } from '../constants';

const missionOneOptions = [
    {
        conditional: {
            exclude: 'barracks visited'
        },
        text: 'inspect the barracks',
        alignment: ALIGNMENTS.NEUTRAL,
        weight: 0,
        toggle: 'barracks visited',
        next: 'mission one: barracks'
    },
    {
        conditional: {
            exclude: 'siege workshop visited'
        },
        text: 'inspect the siege workshop',
        alignment: ALIGNMENTS.NEUTRAL,
        weight: 0,
        toggle: 'siege workshop visited',
        next: 'mission one: siege workshop'
    },
    {
        conditional: {
            exclude: 'naval yard visited'
        },
        text: 'inspect the naval yard',
        alignment: ALIGNMENTS.NEUTRAL,
        weight: 0,
        toggle: 'naval yard visited',
        next: 'mission one: naval yard'
    },
    {
        conditional: {
            contains: [
                'barracks visited',
                'naval yard visited',
                'siege workshop visited'
            ]
        },
        text: 'return to messenger',
        alignment: ALIGNMENTS.NEUTRAL,
        weight: 0,
        next: 'mission one: return to messenger'
    }
];

// STORY OF KERDEL
export const KERDEL = {
    id: 'kerdel',
    title: 'Kerdel',
    description: 'On this night, you prepare for battle',
    start: 'prologue',
    chapters: {
        'prologue': {
            id: 'prologue',
            title: 'that night, on the wall...',
            body: {
                default: [
                    'you are KERDEL, a general in the Tam Army.',
                    '',
                    'on this night, you are preparing for a battle to be held upon daylight breaking. ',
                    'you hear the footsteps of an approaching courier.',
                    '',
                    '"sir! KING MILLUS has requested you read this memo"...'
                ]
            },
            options: [
                {
                    text: 'read the king\'s letter',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 0,
                    next: 'mission one'
                }
            ]
        },
        'mission one': {
            id: 'mission one',
            title: 'are you prepared?',
            body: {
                default: [
                    '"KERDEL - please inspect your forces, and let this messenger know if your battalion" ',
                    'is ready for war".'
                ]
            },
            options: missionOneOptions
        },
        'mission one: barracks': {
            id: 'mission one: barracks',
            title: 'checking out the barracks',
            body: {
                default: [
                    'you see the barracks are clear.',
                    'your soldiers are deployed to their stations. ',
                    'you remember when you arranged the encampment for your men.',
                    '',
                    'they are a good sort. truly, you feel comforted that they have your back.'
                ]
            },
            options: missionOneOptions
        },
        'mission one: siege workshop': {
            id: 'mission one: siege workshop',
            title: 'checking out the siege workshop',
            body: {
                default: [
                    'you see the siege workshop is primed, and your engineers are ready at their repair stations.',
                    'you know your battalion is in good hands when the battle gets rough.',
                    '',
                    'but will it actually be enough? the morning\'s battle will be final for so many.'
                ]
            },
            options: missionOneOptions
        },
        'mission one: naval yard': {
            id: 'mission one: naval yard',
            title: 'checking out the naval yard',
            body: {
                default: [
                    'you see the naval yard is buzzing with activity, and all your sailors are ready for what is ahead.',
                    'the road to war was short, and preparations more so, but the wait was over, and battle ' +
                    ' could come soon.',
                    '',
                    'for some, it would be too soon, too many deaths were about to happen.'
                ]
            },
            options: missionOneOptions
        },
        'mission one: return to messenger': {
            id: 'mission one: return to messenger',
            title: 'let the king know',
            body: {
                default: [
                    'you approach the messenger, and let him know all is ready, locked and loaded.',
                    'he safely departs quietly in the night, but something troubles you.',
                    'you think back to the day you left on your first adventure',
                    '',
                    'the day this all started...'
                ]
            }
        }

    }
};


// lawful vs chaotic
// would you spare the life of a prisoner, or executed him.

// lawful vs good
// would you have mercy for an insubordinate, or court marshals her

// lawful vs evil
// would you follow a rule he doesn't believe in, or succumb to his need for revenge.

// good vs evil
// would you take responsibility for the death of a squad, or blame one of the dead soldiers

// good vs chaotic
// evil vs chaotic
