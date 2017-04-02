import { ALIGNMENTS } from '../constants';

export const KERDEL = {
    id: 'kerdel',
    title: 'Kerdel',
    description: 'coming soon',
    start: 'prologue',
    chapters: {
        'prologue': {
            id: 'prologue',
            title: 'that night, on the wall...',
            body: {
                default: [
                    'you are KERDEL, a general in the Tam Army.\n\n',
                    'on this night, you are preparing for a battle to be held upon daylight breaking. ',
                    'you hear the footsteps of an approaching courier.\n\n',
                    '"sir! KING MILLUS has requested you read this memo"...'
                ]
            },
            options: [
                {
                    idx: 0,
                    text: 'read letter',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    next: 'mission one'
                }
            ]
        },
        'mission one': {
            id: 'mission one',
            title: 'are you prepared?',
            body: {
                default: [
                    '"Kerdel - please inspect your forces, and let this messenger know if your battalion" ',
                    'is ready for war".'
                ]
            },
            options: [
                {
                    idx: 0,
                    text: 'inspect the barracks',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'barracks visited',
                    next: 'mission one: barracks'
                },
                {
                    idx: 1,
                    text: 'inspect the siege workshop',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'siege workshop visited',
                    next: 'mission one: siege workshop'
                },
                {
                    idx: 2,
                    text: 'inspect the naval yard',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'naval yard visited',
                    next: 'mission one: naval yard'
                }
            ]
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
            options: [
                {
                    idx: 0,
                    text: 'inspect the siege workshop',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'siege workshop visited',
                    next: 'mission one: siege workshop'
                },
                {
                    idx: 1,
                    text: 'inspect the naval yard',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'naval yard visited',
                    next: 'mission one: naval yard'
                },
                {
                    idx: 2,
                    conditional: {
                        contains: [
                            'barracks visited',
                            'naval yard visited',
                            'siege workshop visited'
                        ]
                    },
                    text: 'return to messenger',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    next: 'return to messenger'
                }
            ]
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
            options: [
                {
                    idx: 0,
                    text: 'inspect the barracks',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'barracks visited',
                    next: 'mission one: barracks'
                },
                {
                    idx: 1,
                    text: 'inspect the naval yard',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'naval yard visited',
                    next: 'mission one: naval yard'
                },
                {
                    idx: 2,
                    conditional: {
                        matches: [
                            'barracks visited',
                            'naval yard visited',
                            'siege workshop visited'
                        ]
                    },
                    text: 'return to messenger',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    next: 'return to messenger'
                }
            ]
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
            options: [
                {
                    idx: 0,
                    text: 'inspect the barracks',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'barracks visited',
                    next: 'mission one: barracks'
                },
                {
                    idx: 1,
                    text: 'inspect the siege workshop',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    toggle: 'siege workshop visited',
                    next: 'mission one: siege workshop'
                },
                {
                    idx: 2,
                    conditional: {
                        contains: [
                            'barracks visited',
                            'naval yard visited',
                            'siege workshop visited'
                        ]
                    },
                    text: 'return to messenger',
                    alignment: ALIGNMENTS.NEUTRAL,
                    weight: 1,
                    next: 'return to messenger'
                }
            ]
        }

    }
};
