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
                    <span>News</span>
                </a>

                <a href="" className="cat2">
                    <span>How to swim ?</span>
                </a>

                <a href="" className="cat3">
                    <span>discover our tips for better swimming</span>
                </a>

                <a href="" className="cat4">
                    <span>Comptetitions</span>
                </a>

                <a href="" className="cat5">
                    <span>World records</span>
                </a>

                <a href="" className="cat6">
                    <span>Athlets</span>
                </a>
                
                <a href="" className="cat7">
                    <span>Awards</span>
                </a>

                <a href="" className="cat">
                    <span>Best men swimming</span>
                </a>

                <a href="" className="cat">
                    <span>Best women swimming</span>
                </a>
            </div>

        </div>
    </section>

    );
}


