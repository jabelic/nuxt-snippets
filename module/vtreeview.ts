export const dummyData1 = [
  {
    id: 1,
    name: 'Applications :',
    children: [],
  },
  {
    id: 5,
    name: 'Documents :',
    children: [
      {
        id: 6,
        name: 'vuetify :',
        children: [
          {
            id: 7,
            name: 'src :',
            children: [
              { id: 8, name: 'index : ts' },
              { id: 9, name: 'bootstrap : ts', contents: { name: 'hoge' } },
            ],
          },
        ],
      },
      {
        id: 10,
        name: 'material2 :',
        children: [
          {
            id: 11,
            name: 'src :',
            children: [
              { id: 12, name: 'v-btn : ts' },
              { id: 13, name: 'v-card : ts' },
              { id: 14, name: 'v-window : ts' },
            ],
          },
        ],
      },
    ],
  },
]
