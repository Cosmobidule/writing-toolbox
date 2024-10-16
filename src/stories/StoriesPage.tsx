import React, {Fragment} from 'react';
import { MOCK_STORIES } from './MockStories';
import StoryList from './StoryList';

function StoriesPage() {
    return (
    <Fragment>
        <h1>Stories</h1>
        <StoryList stories={MOCK_STORIES} />
    </Fragment>
    );
}

export default StoriesPage;