export default {
    name: 'pilares',
    type: 'document',
    title: 'Pilares',
    fields: [
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
      },
      {
        name: 'listaPilar',
        type: 'array',
        of:[
          {
            name: 'descricaoPilar',
            type: 'string',
            title: 'Descrição do pilar'
          }
        ]
        
      },
    ]
  }