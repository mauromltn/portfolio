import styles from "../../styles/Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.footerText}>
					<p>Front-End Developer</p>
					<p>Copyright © Mauro</p>
				</div>
				<div className={styles.footerLinks}>
					<ul>
						<label>Navigation</label>
						<li>
							<a href="#">home</a>
						</li>
						<li>
							<a href="#about">about</a>
						</li>
						<li>
							<a href="#project">projects</a>
						</li>
						<li>
							<a href="#connect">connect</a>
						</li>
					</ul>
					<ul>
						<label>Social</label>
						<li>
							<a href="mailto:dev.montane@gmail.com">email</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/mauro-montane/">linkedin</a>
						</li>
						<li>
							<a href="https://github.com/mauromltn">github</a>
						</li>
						<li>
							<a href="https://www.threads.net/@mauromontane">threads</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;