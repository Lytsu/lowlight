import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '做多数人喜爱的下载站',
    description: (
      <>
        <p>作为音乐节奏游戏的下载分流之一，微光 Lowlight 希望能让更多人能够下载到更多的音乐节奏游戏。</p>
        <p>与此同时，我们也希望通过简单的文字描述去帮助更多人体验游戏的快乐。</p>
        <p>在微光 Lowlight 自由下载您想要的游戏吧！</p>
      </>
    ),
  },
  {
    title: '全球多个节点加速下载',
    description: (
      <>
        <p>微光 Lowlight 部署了数个遍布于全球各地的下载节点，这些节点均分配了足够的带宽。</p>
        <p>无论您使用什么网络运营商，在世界上的什么地方，我们都希望为您提供优质的服务。</p>
        <p><s>虽然有时候还是会宕机掉线就是了</s></p>
      </>
    ),
  },
  {
    title: '让所有玩家都从中受益',
    description: (
      <>
        <p>虽然不敢立下过于绝对的保证，但我们认为本站应该是公益性质且不求回报的。</p>
        <p>我们不仅提供了游戏的分流下载，还提供了其他相关文档，帮助您获得更好的游戏体验。</p>
        <p>这就是微光 Lowlight ，做一缕微弱却有意义的光。</p>
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
