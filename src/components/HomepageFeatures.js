import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [{
        title: '下载安装方便快捷',
        description: (
        <>
            Lowlight 页面上提供的游戏点击即可下载，方便又简单。
            同时，Lowlight 部署了数个遍布于全球各地的节点，可以为您提供优质的下载服务。
        </>
        ),
    },
    {
        title: '非商业的兴趣项目',
        description: (
        <>
            Lowlight 是<b>开源、 非商业、 非盈利向</b>的兴趣项目；
            我们承诺在自身生命周期内不会添加任何广告，保证您的下载体验。
        </>
        ),
    },
    {
        title: '大家一起实现的故事',
        description: (
        <>
            Lowlight 的健康发展离不开各位玩家的大力支持。
            我们希望通过 Lowlight 这个项目，为部分不方便下载游戏的玩家提供一定的便利，最终使玩家社群整体受益。
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
