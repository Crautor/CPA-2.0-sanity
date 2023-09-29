export default {
    name: 'membros',
    type: 'document',
    title: 'Membros',
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
        name: 'cargo',
        type: 'string',
        title: 'Cargo'
      },
      {
        name: 'bio',
        type: 'string',
        title: 'Bio'
      },
    ]
  }

//- Destaque
// - Imagem
// - Nome
// - Cargo
// - Bio