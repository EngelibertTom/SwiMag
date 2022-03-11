import './Home.css';
import image from '../images/image_test.png'
import fleche from '../images/fleche.png'

export default function Home() {
    return (

    <section className="home container">
        <div className="article_une">
            <h1 className="titre">Main article name</h1>
            <img className="img" src={image} alt="" />
            <span className="desc"> Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue pretium eros. Fusce volutpat libero ligula, ut luctus felis ornare a. Nullam varius, sem quis eleifend feugiat, lectus justo hendrerit dolor, nec placerat velit leo id massa.</span>
        </div>

        <div className="dernier_articles">
            <div className="div_titre_last"> <img className="titre_img" src={fleche} alt="" /><h2 className="titre">Last articles : </h2> </div>
            <div className="article">
                <img src={image} alt="" />
                <span className="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>

            <div className="article">
                <img src={image} alt="" />
                <span className="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>

            <div className="article">
                <img src={image} alt="" />
                <span className="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>

            <div className="article">
                <img src={image} alt="" />
                <span className="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
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


