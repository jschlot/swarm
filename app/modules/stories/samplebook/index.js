import { WHOAMI } from './whoami';
import { GOINGPLACES } from './goingplaces';
import { FOUNDANDLIST } from './foundandlost';

export const samplebook = {
    meta: {
        title: 'Sample Book',
        keywords: 'tutorial, sample',
        description: [
            'in which we ask you a series of strange questions, and we find out a lot about who you are',
            ' as a person.'
        ],
        backgroundVideo: 'http://pixabay.com/en/videos/download/video-447_medium.mp4'
    },
    episodes: [WHOAMI, GOINGPLACES, FOUNDANDLIST, GOINGPLACES, FOUNDANDLIST]
};
