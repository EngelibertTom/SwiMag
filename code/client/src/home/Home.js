import './Home.css';
import image from '../images/image_test.png'
import image2 from '../images/image_test2.png'
import image3 from '../images/image_test3.png'
import image4 from '../images/image_test4.png'
import image5 from '../images/image_test5.png'
import fleche from '../images/fleche.png'

export default function Home() {
    return (

    <section className="home container">
        <a href="/ArticleTwo" className="article_une">
            <h1 className="titre">Practice Is Everything: The Mindset Behind Superhero Workouts</h1>
            <img className="img" src={image} alt="" />
            <span className="desc"> If you are serious about accomplishing big things in the pool you need to rethink the way you train. Here is why practice is everything.</span>
        </a>

        <div className="dernier_articles">
            <div className="div_titre_last"> <img className="titre_img" src={fleche} alt="" /><h2 className="titre">Last articles : </h2> </div>
            <a href="" className="article">
                <img src={image2} alt="" />
                <div className="desc">
                    <span className="titre">The Top 6 Core Exercises for Swimmers</span>
                    <span>Having a powerful core will make you a better, stronger swimmer. </span>
                </div>
            </a>

            <a href="" className="article">
                <img src={image3} alt="" />
                <div className="desc">
                    <span className="titre">How to Swim Faster Freestyle</span>
                    <span>Ready to take your freestyle to the next level?</span>
                </div>            </a>

            <a href="" className="article">
                <img src={image4} alt="" />
                <div className="desc">
                    <span className="titre">Butterfly Sets: How to Dominate Your Next 100m Butterfly</span>
                    <span>“You gotta go out fast, and come back faster!” is one of those lines ...</span>
                </div>            </a>

            <a href="" className="article">
                <img src={image5} alt="" />
                <div className="desc">
                    <span className="titre">This is How Fast Katie Ledecky Swims.</span>
                    <span>You already know that Katie Ledecky is the top female swimmer ...</span>
                </div>            </a>
        </div>

        <div className="categories">
            <div className="div_titre_last"> <img className="titre_img" src={fleche} alt="" /><h2 className="titre">Categories : </h2> </div>

            <div className="div_cat">
                
                <a href="" className="cat1">
                    News
                </a>

                <a href="" className="cat2">
                    How to swim ?
                </a>

                <a href="" className="cat3">
                    discover our tips for better swimming
                </a>

                <a href="" className="cat4">
                    Comptetitions
                </a>

                <a href="" className="cat5">
                    World records
                </a>

                <a href="" className="cat6">
                    Athlets
                </a>
                
                <a href="" className="cat7">
                    Awards
                </a>

                <a href="" className="cat">
                    Best men swimming
                </a>

                <a href="" className="cat">
                    Best women swimming
                </a>
            </div>

        </div>

    </section>

    );
}