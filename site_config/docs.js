export default {
  'en-us': {
    sidemenu: [
      {
        title: 'title',
        children: [
          {
            title: 'Event-B',
            link: '/en-us/docs/eventb.html',
          },
          {
            title: 'UML-B',
            link: '/en-us/docs/umlb.html',
          },
          {
            title: 'Case Study',
            opened: true,
            children: [
              {
                title: 'DB Netz',
                link: '/en-us/docs/cs/db.html',
              },
              {
                title: 'Modelling the Hybrid ERTMS Level 3 in UML-B',
                link: '/en-us/docs/cs/ertms3.html',
              },
              {
                title: 'Developing UML-B for Avionics',
                link: '/en-us/docs/cs/avionics.html',
              },
              {
                title: 'CODA Component Diagram models',
                link: '/en-us/docs/cs/coda.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '列表',
        children: [
          {
            title: 'Event-B',
            link: '/zh-cn/docs/eventb.html',
          },
          {
            title: 'UML-B',
            link: '/zh-cn/docs/umlb.html',
          },
          {
            title: '案例研究',
            opened: true,
            children: [
              {
                title: 'DB Netz',
                link: '/zh-cn/docs/cs/db.html',
              },
              {
                title: '在UML-B中模拟混合ERTMS 3',
                link: '/zh-cn/docs/cs/ertms3.html',
              },
              {
                title: '采用UML-B开发航空电子学',
                link: '/zh-cn/docs/cs/avionics.html',
              },
              {
                title: 'CODA组件图模型',
                link: '/zh-cn/docs/cs/coda.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
