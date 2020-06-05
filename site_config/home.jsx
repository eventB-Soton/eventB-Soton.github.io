import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'Event-B',
      briefIntroduction: '系统级建模和分析的正式方法',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/eventb.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: '',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '软件建模',
      desc: '软件缺陷会导致软件的测试和修复耗费大量的时间，如果不被发现，会对软件用户造成不利影响。相当一部分软件缺陷产生于需求和设计阶段，但只有在编码阶段之后，软件被测试或部署时才被发现。利用形式化建模明确规定和分析需求和设计，有助于在编码前消除许多缺陷。',
      img: '/img/bmethod.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '建模符号',
          content: '集合理论作为一种建模符号',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '精细化',
          content: '利用精细化来表示不同抽象层次的系统',
        },
        {
          img: '/img/feature_service.png',
          title: '证明',
          content: '用数学证明来验证不同细化级别之间的一致性',
        },
        {
          img: '/img/feature_hogh.png',
          title: '工具支持',
          content: 'Rodin平台是一个基于Eclipse的Event-B集成开发环境，它为精细化和数学证明提供了有效的支持。',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '使用Rodin',
      img: '/img/rodin.png',
      button: {
        text: 'Rodin使用手册',
        link: 'https://www3.hhu.de/stups/handbook/rodin/current/html/',
      },
    },
    // users: {
    //   title: '用户',
    //   desc: <span>简单描述</span>,
    //   list: [
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //   ],
    // },
  },
  'en-us': {
    brand: {
      brandName: 'Event-B',
      briefIntroduction: 'A formal method for system-level modelling and analysis',
      buttons: [
        {
          text: 'Quick Start',
          link: 'https://wiki.event-b.org/index.php/Event-B_Language',
          type: 'primary',
        },
        {
          text: 'Rodin Tool Set',
          link: 'https://sourceforge.net/projects/rodin-b-sharp/',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'Software Modelling',
      desc: 'Software defects result in a lot of time-consuming test and fix of software and, if left undetected, have a detrimental impact on software users. A significant proportion of software defects arise in requirements and design phases but are only detected after coding phases when software is being tested or deployed. The use of formal modelling to clearly specify and analyse requirements and designs helps to eliminate many defects prior to coding.',
      img: '/img/bmethod.png',
    },
    features: {
        title: 'Feature List',
        list: [
          {
            img: '/img/feature_transpart.png',
            title: 'modelling notation',
            content: 'set theory as a modelling notation',
          },
          {
            img: '/img/feature_loadbalances.png',
            title: 'refinement',
            content: 'use of refinement to represent systems at different abstraction levels',
          },
          {
            img: '/img/feature_service.png',
            title: 'proof',
            content: 'use of mathematical proof to verify consistency between refinement levels',
          },
          {
            img: '/img/feature_hogh.png',
            title: 'tool support',
            content: 'The Rodin Platform is an Eclipse-based IDE for Event-B that provides effective support for refinement and mathematical proof',
          }
          // {
          //   img: '/img/feature_runtime.png',
          //   title: 'feature5',
          //   content: 'feature description',
          // },
          // {
          //   img: '/img/feature_maintenance.png',
          //   title: 'feature6',
          //   content: 'feature description',
          // }
        ]
    },
    start: {
      title: 'Quick start',
      desc: 'start with Rodin tool set',
      img: '/img/rodin.png',
      button: {
        text: 'Rodin Handbook',
        link: 'https://www3.hhu.de/stups/handbook/rodin/current/html/',
      },
    },
    // users: {
    //   title: 'users',
    //   desc: <span>some description</span>,
    //   list: [
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //     '/img/users_alibaba.png',
    //   ],
    // },
  },
};
