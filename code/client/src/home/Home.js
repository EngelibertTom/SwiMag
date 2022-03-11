import './Home.css';
import image from '../images/image_test.png'
import fleche from '../images/fleche.png'

export default function Home() {
    return (

    <section class="home container">
        <div class="article_une">
            <h1 class="titre">Main article name</h1>
            <img class="img" src={image} alt="" />
            <span class="desc"> Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue pretium eros. Fusce volutpat libero ligula, ut luctus felis ornare a. Nullam varius, sem quis eleifend feugiat, lectus justo hendrerit dolor, nec placerat velit leo id massa.</span>
        </div>

        <div class="dernier_articles">
            <div class="div_titre_last"> <img class="titre_img" src={fleche} alt="" /><h2 class="titre">Last articles : </h2> </div>
            <div class="article">
                <img src={image} alt="" />
                <span class="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>

            <div class="article">
                <img src={image} alt="" />
                <span class="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>

            <div class="article">
                <img src={image} alt="" />
                <span class="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>

            <div class="article">
                <img src={image} alt="" />
                <span class="desc">Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>

        <div class="categories">
            <div class="div_titre_last"> <img class="titre_img" src={fleche} alt="" /><h2 class="titre">Categories : </h2> </div>

            <div class="div_cat">
                
                <a href="" class="cat1">
                    <span>News</span>
                </a>

                <a href="" class="cat2">
                    <span>How to swim ?</span>
                </a>

                <a href="" class="cat3">
                    <span>discover our tips for better swimming</span>
                </a>

                <a href="" class="cat4">
                    <span>Comptetitions</span>
                </a>

                <a href="" class="cat5">
                    <span>World records</span>
                </a>

                <a href="" class="cat6">
                    <span>Athlets</span>
                </a>
                
                <a href="" class="cat7">
                    <span>Awards</span>
                </a>

                <a href="" class="cat">
                    <span>Best men swimming</span>
                </a>

                <a href="" class="cat">
                    <span>Best women swimming</span>
                </a>
            </div>

        </div>
    </section>

    );
}


