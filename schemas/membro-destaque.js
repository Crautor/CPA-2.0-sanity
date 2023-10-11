export default {
    name: 'membrosDestaque',
    type: 'document',
    title: 'Membros Destaque',
    fields: [
      {
        name: 'imagem',
        type: 'image',
        title: 'Foto Membro'
      },
      {
        name: 'nome',
        type: 'string',
        title: 'Nome Membro'
      },
      {
        name: 'sobrenome',
        type: 'string',
        title: 'Sobrenome Membro'
      },
      {
        name: 'cargo',
        type: 'string',
        title: 'Cargo'
      },
    ]
  }