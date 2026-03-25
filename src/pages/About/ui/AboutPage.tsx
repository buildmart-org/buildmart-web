import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {/* HERO */}
        <section className={styles.hero}>
          <h1 className={styles.title}>About TechStore</h1>
          <p className={styles.subtitle}>
            Your trusted destination for premium electronics and cutting-edge
            technology
          </p>
        </section>

        {/* STORY */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Story</h2>

          <div className={styles.block}>
            <p>
              Founded in 2020, TechStore has grown to become one of the most
              trusted names in consumer electronics. We're passionate about
              bringing you the latest and greatest technology products at
              competitive prices.
            </p>

            <p>
              Our mission is simple: to provide exceptional products,
              outstanding customer service, and a seamless shopping experience.
              Whether you're a tech enthusiast or just looking for reliable
              electronics, we're here to help you find exactly what you need.
            </p>

            <p>
              With a carefully curated selection of premium brands and products,
              we ensure that every item in our catalog meets our high standards
              for quality and performance.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Values</h2>

          <div className={styles.values}>
            <div className={styles.card}>
              <span className={styles.icon}>🎯</span>
              <h3>Quality First</h3>
              <p>
                We only stock products from trusted brands that meet our
                rigorous quality standards.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>💯</span>
              <h3>Customer Satisfaction</h3>
              <p>
                Your happiness is our priority. We're committed to providing
                exceptional service at every step.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.icon}>⚡</span>
              <h3>Fast & Reliable</h3>
              <p>
                Quick shipping, easy returns, and responsive support — we're
                here when you need us.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>

          <div className={styles.block}>
            <div className={styles.contacts}>
              <div>
                <h4>Email Us</h4>
                <p>support@techstore.com</p>
                <p>sales@techstore.com</p>
              </div>

              <div>
                <h4>Call Us</h4>
                <p>1-800-TECH-SHOP</p>
                <p>(1-800-832-4746)</p>
              </div>

              <div>
                <h4>Visit Us</h4>
                <p>123 Tech Street</p>
                <p>San Francisco, CA 94105</p>
              </div>

              <div>
                <h4>Business Hours</h4>
                <p>Mon–Fri: 9AM – 6PM PST</p>
                <p>Sat–Sun: 10AM – 4PM PST</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
