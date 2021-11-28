import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '在此 与你心意合一',
    description: (
      <>
        <p>作为一个微不足道的站点，微光 Lowlight 希望能帮助更多人分享音乐节奏游戏资源。</p>
        <p>我们希望通过这简单的功能，去帮助更多人体验游戏的快乐，享受生活的美好。</p>
        <p>在此，让我们心意合一，向着美好进发。</p>
      </>
    ),
  },
  {
    title: '突破所限 大有可能',
    description: (
      <>
        <p>微光 Lowlight 不止于提供游戏资源的分享，还希望能帮助他人更多。</p>
        <p>我们部署了数个遍布于全球各地的节点。无论您使用何种网络运营商，身处世界上的何处，我们都希望为您提供优质的服务。同时，我们也在研究更多能够帮助玩家或者提升用户体验的方式。</p>
      </>
    ),
  },
  {
    title: '点亮美好 矢志不渝',
    description: (
      <>
        <p>微光 Lowlight 是<b>非商业、公益性质</b>的音乐节奏游戏资源分享站点。</p>
        <p>我们希望以身作则，认真做好这项企划，并在力所能及的范围内将这项企划一直持续下去。</p>
        <p>微光 Lowlight ，做一缕摇曳的微弱光芒。</p>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
