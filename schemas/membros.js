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
        name: 'sobrenome',
        type: 'string',
        title: 'Sobrenome Membro'
      },
      {
        name: 'cargo',
        type: 'string',
        title: 'Cargo'
      },
      {
        name: 'subtitulo',
        type: 'string',
        title: 'Sub Titulo'
      },
      {
        name: 'titulo',
        type: 'string',
        title: 'Titulo'
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