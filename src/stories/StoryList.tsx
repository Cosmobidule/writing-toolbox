import React, {Fragment} from 'react';
import { Story } from './Story';

interface StoryListProps {
    stories : Story[];
}

function StoryList({stories} : StoryListProps) {
    return (
        <div className='row'>
            {stories.map((story) => (
                <div className='card'>
                    <img src={story.imageUrl} alt={story.name} />
                    <section className='section dark'>
                        <h5 className='strong'>
                            ({story.alias}) {story.name}
                        </h5>
                        <p>{story.description}</p>
                    </section>
                </div>
            ))}
        </div>
    );
}


export default StoryList;