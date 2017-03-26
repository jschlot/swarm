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

/*
Books are structured as an array of episodes
    each episode has a linked list set of chapters
        each chapter has a story text and at least one option
            each option can set weighted alignment scores, and can choose which chapter is next
        if there are no more "next" chapters, then we proceed to a score screen for the chapter
    if there are no more episodes, then we end the book, and proceed to the book score screen
*/
