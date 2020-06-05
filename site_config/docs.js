export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
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
        title: '大标题',
        children: [
          {
            title: '示例1',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
