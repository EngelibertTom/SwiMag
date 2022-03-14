import React from 'react';
import axios from "axios";
import './Articles.css'
import image from './article2.png'



function ArticleTwo(props) {
    return (
        <>
            <h1>7 Things Swimming Will Teach You About Life</h1>
            <div>

                <img src={image} className="" ></img>
            </div>
            <h1>----------------------------</h1>
            <h4>FSwimming isn’t just about bad tan lines, having raccoon eyes and early mornings. And it’s not just about records, gold medals and best times.</h4><br></br>
            <h4>And it’s not just all the glorious health benefits of swimming.
                Although there are plenty of those.
            </h4>.<br></br>
            <h4>Swimming, and sport in general, provide a proving ground for some of the most fundamental and critical things that you will carry with you for the rest of your life.</h4><br></br>
            <h4>Whether in your career, in personal relationships, or even different sports, swimming will teach you the importance of hard work, of being humble, and of being a team player.s</h4>
            <br></br>
            <h4>Here are 7 things swimming will teach you about life:</h4>
            <h3>1. You have to work hard for the things you want.</h3><br></br>
            <h4>Nothing worth having in the pool or in life comes without effort. (Despite what I am about to tell you in the next point.) Accomplishing cool stuff will always require giving what sometimes may seem like unnatural levels of effort.
                Make working hard your talent and you will never go without success in the pool and in life.</h4><br></br>

            <h3>2. Sometimes it’s just not fair.</h3><br></br>
            <h4>You know the swimmer—shows up to practice once or twice a week, but because they have been gifted with plates for hands and the height and gangliness of an LA Laker they still crush you anytime you step up on the blocks.</h4><br></br>
            <h4>In the long run a work ethic will always take you more places than natural talent and physical gifts without effort. Always.</h4><br></br>
            <h4>It’s just hard to remember that when you are getting destroyed by two body lengths in a 50 by the guy who never goes to practice.</h4><br></br>

            <h3>3. You learn how to cope with failure and setbacks.</h3>
            <br></br>
            <h4>It’s not always going to be fair. And things won’t always go our way.
                There will be times where no matter how hard we work the results don’t match our effort in practice. Or there will moments where you get flustered as you get up on the blocks and totally choke.</h4>
            <br></br>
            <h4>These moments sting, they hurt, and they take us down a peg. But they also teach you how to be mentally tough. To overcome. And to be humble.</h4>
            <br></br>
           </>
    );
}
export default ArticleTwo