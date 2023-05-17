import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Run your own server',
    Svg: require('@site/static/img/hosting.svg').default,
    description: (
      <>
        OpenGarlic was built to run in docker containers,
		to quickly and easily start your own.
      </>
    ),
  },
  {
    title: 'Develop your own game modes',
    Svg: require('@site/static/img/gamedev.svg').default,
    description: (
      <>
        OpenGarlic was built to allow custom game modes
		that have a lot of control.
      </>
    ),
  },
  {
    title: 'Share your modes with others',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        We encourage you to share modes you've created
		with others. We intend to have a place to collect
		these for easy browsing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
