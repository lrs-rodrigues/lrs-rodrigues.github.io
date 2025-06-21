import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Contribua',
    description: (
      <>
        Você pode contribuir com essa documentação em <a target="_blank" rel="noopener noreferrer" href="https://github.com/lrs-rodrigues">GitHub</a> <br/>
      </>
    ),
  },
  {
    title: 'Sobre-mim',
    description: (
      <>
        Engenheiro de Software Backend no Itaú Unibanco
      </>
    ),
  },
  {
    title: 'Contato',
    description: (
      <>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/lrs-rodrigues">GitHub</a> <br/>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucassrodriguess/">Linkedin</a>
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
