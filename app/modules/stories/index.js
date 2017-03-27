import { WHOAMI } from './sample/whoami';

import { KERDEL } from './labyrinth/kerdel';
import { DARROWMERE } from './labyrinth/darrowmere';
import { ELYRIS } from './labyrinth/elyris';
import { WORLDEATER } from './labyrinth/worldeater';

export const sample = {
    meta: {
        title: 'Sample Story',
        keywords: 'tutorial, sample',
        description: [
            'you meet an unexpected friend, and your actions decide her fate'
        ]
    },
    episodes: [
        WHOAMI
    ]
};

export const legacyOfTheLabyrinths = {
    meta: {
        title: 'The Legacy of the Labyrinths',
        keywords: 'epic, sword, sorcery, fantasy',
        description: [
            'On the night of an epic battle, a General is reminded of his fate'
        ]
    },
    episodes: [
        KERDEL,
        DARROWMERE,
        ELYRIS,
        WORLDEATER
    ]
};
