export default {
    name: 'objetivo',
    type: 'document',
    title: 'Objetivo',
    fields: [
        {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
        },
        {
        name: 'itens',
        type: 'array',
        of: [
        {
            type: 'string',
            title: 'Item'
        },
        ]
        
    }
    ]
}
