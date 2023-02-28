import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Dot Files',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				All my dot files, their configurations, and how to use them (Keybindings, themes, etc.)
			</>
		),
	},
	{
		title: 'Documentation & Resources',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				Resources that I refer to for work and personal projects. This includes	any tools, frameworks, libraries, technologies that I am working with or interested in.
			</>
		),
	},
	{
		title: 'Blogs',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				All my blogs, articles, and tutorials that I have written or will write in the future.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			{/* <div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div> */}
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<>
			<div className="text--center padding-horiz--sm" style={{
				marginTop: '2rem',
				fontWeight: 'lighter',
				// textDecoration: 'underline',
			}}>
				<h1>{`What will you find here?`}</h1>
			</div>
			<section className={styles.features}>

				<div className="container">
					<div className="row">
						{FeatureList.map((props, idx) => (
							<Feature key={idx} {...props} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
