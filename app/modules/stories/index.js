import { WHOAMI } from './samplebook/whoami';
import { GOINGPLACES } from './samplebook/goingplaces';
import { FOUNDANDLIST } from './samplebook/foundandlost';

export const samplebook = {
    meta: {
        title: 'Sample Book',
        keywords: 'tutorial, sample',
        description: [
            'in which we ask you a series of strange questions, and we find out a lot about who you are',
            ' as a person.'
        ]
    },
    episodes: [WHOAMI, GOINGPLACES, FOUNDANDLIST]
};
