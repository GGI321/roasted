import React from 'react';
import './Blog.css';
import pbg from '../pics/pbg.png';
import bbg from '../pics/bbg.png';

function Blog() {
    // Inline styles
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            margin: '20px',
            color: '#333',
        },
        header: {
            textAlign: 'center',
            marginBottom: '30px',
        },
        title: {
            fontSize: '2.5rem',
            color: '#333',
        },
        subtitle: {
            fontSize: '1.2rem',
            color: '#555',
        },
        section: {
            marginBottom: '30px',
        },
        sectionTitle: {
            fontSize: '2rem',
            color: '#333',
            marginBottom: '15px',
        },
        article: {
            marginBottom: '20px',
        },
        articleTitle: {
            fontSize: '1.5rem',
            color: '#333',
            marginBottom: '10px',
        },
        text: {
            fontSize: '1rem',
            color: '#555',
        },
    };

    return (
        <div>
            {/* First Container */}
            <div className="container">
                <h1>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
                <div className="container py-5">
                    <img src={pbg} alt="" className="img-fluid rounded" data-aos="flip-up"/>
                </div>
            </div>

            <div className="container">
                {/* Second Container */}
                <div className="container" style={styles.container}>
                    <p className="text-center py-4" data-aos="fade-right">
                        <b>What do you need to prepare a home-made burger?</b>
                    </p>

                    {/* Burger Secrets Section */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>Secrets to the Perfect Burger</h2>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Quality Beef</h3>
                            <p style={styles.text}>
                                The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Seasoning</h3>
                            <p style={styles.text}>
                                Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Don’t Overwork the Meat</h3>
                            <p style={styles.text}>
                                When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Cooking</h3>
                            <p style={styles.text}>
                                High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Resting</h3>
                            <p style={styles.text}>
                                Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
                            </p>
                        </article>
                    </section>

                    {/* Pizza Tips Section */}
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>Tips for the Perfect Pizza</h2>
                        <article style={styles.article}  data-aos="fade-left">
                            <h3 style={styles.articleTitle}>Quality Ingredients</h3>
                            <p style={styles.text}>
                                Use fresh, high-quality ingredients like San Marzano tomatoes, fresh mozzarella, and extra-virgin olive oil for the best flavor.
                            </p>
                        </article>
                        <article style={styles.article} data-aos="fade-left">
                            <h3 style={styles.articleTitle}>The Dough</h3>
                            <p style={styles.text}>
                                The foundation of a great pizza is the dough. Use high-protein flour, and let the dough ferment slowly in the refrigerator for at least 24 hours for optimal texture and flavor.
                            </p>
                        </article>
                        <article style={styles.article} data-aos="fade-left">
                            <h3 style={styles.articleTitle}>Toppings</h3>
                            <p style={styles.text}>
                                Less is more when it comes to toppings. Overloading the pizza can make it soggy. Stick to a few high-quality ingredients.
                            </p>
                        </article>
                        <article style={styles.article} data-aos="fade-left">
                            <h3 style={styles.articleTitle}>Cooking</h3>
                            <p style={styles.text}>
                                Use a pizza stone or steel in your oven to mimic the effects of a professional pizza oven. Preheat it for at least 30 minutes to ensure a crispy crust.
                            </p>
                        </article>
                    </section>
                </div>

                {/* Third Container */}
                <div className="container" style={styles.container}>

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>The Art of Perfect Burgers and Pizzas</h2>
                        <h3>What are the right ingredients to make it delicious?</h3>
                        <article style={styles.article} data-aos="fade-right">
                            <p style={styles.text}>
                                Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Quality Beef</h3>
                            <p style={styles.text}>
                                The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Seasoning</h3>
                            <p style={styles.text}>
                                Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Don’t Overwork the Meat</h3>
                            <p style={styles.text}>
                                When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Cooking</h3>
                            <p style={styles.text}>
                                High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
                            </p>
                        </article>
                        <article style={styles.article}  data-aos="fade-right">
                            <h3 style={styles.articleTitle}>Resting</h3>
                            <p style={styles.text}>
                                Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
                            </p>
                        </article>
                    </section>
                </div>

                <div className="container">
                    <img src={bbg} alt="" className="img-fluid py-4" data-aos="flip-up"/>
                </div>
                <div className="container">
                    <article style={styles.article} data-aos="fade-left">
                        <h3 style={styles.articleTitle}>What are the right ingredients to make it delicious?</h3>
                        <p style={styles.text}>
                            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Blog;