import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '使用简单方便',
    description: (
      <>
      Lowlight 提供的游戏点击即可进行下载，大多数游戏都不需要下载另外的 app 安装，方便又简单。
      </>
    ),
  },
  {
    title: '下载体验良好',
    description: (
      <>
        Lowlight 部署了数个遍布于全球各地的节点，可以为您提供优质的下载服务。
      </>
    ),
  },
  {
    title: '跟随最新游戏版本',
    description: (
      <>
        Lowlight 会尽力追随最新的游戏版本，争取让用户体验到最新的游戏。
      </>
    ),
  },
  {
    title: '纯净的使用体验',
    description: (
      <>
        Lowlight 承诺在自身生命周期内不会添加任何广告，保证网页的清爽。
      </>
    ),
  },
  {
    title: '大家一起实现的故事',
    description: (
      <>
        Lowlight 是<b>开源</b>的<b>免费</b>项目。您可以将本项目自由修改分发使用。
        <p><small>* 仅前端部分开源，后端原理过于简单，不做说明</small></p>
      </>
    ),
  },
  {
    title: '非商业的个人兴趣项目',
    description: (
      <>
        Lowlight 是<b>非商业、目标不为盈利</b>的音乐节奏游戏资源分享站点项目。
        <p><small>* 但如果真的能盈利更好</small></p>
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
