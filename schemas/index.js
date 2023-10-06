import estatutoCPA from './estatuto-cpa'
import qrcode from './qrcode'
import diretrizes from './diretrizes'
import membros from './membros'
import objetivo from './objetivo'
import pontosPositivos from './pontos-positivos'
import satisfacaoBiopark from './satisfacao-biopark'
import satisfacaoCurso from './satisfacao-curso'
import satisfacaoInfra from './satisfacao-infra'
import faq from './faq'
import pilares from './pilares'

export const schemaTypes = [estatutoCPA, pilares, qrcode, diretrizes, membros, objetivo, pontosPositivos, satisfacaoBiopark, satisfacaoCurso, satisfacaoInfra, faq]
// # Dados -ok
// ## Home
// - Imagem QrCode

// ## Diretrizes - ok
// - Origem
// - Título
// - Descrição

// ## Objetivo - ok 
// - Descrição
// - Itens []string

// ## Pontos positivos - ok
// - Título
// - Descrição

// # Comissão avaliadora
// ## Membros - ok
// - Destaque
// - Imagem
// - Nome
// - Cargo
// - Bio

// # Termos e regulamentações -ok
// - Estatuto CPA
// - Pilares dos IES no SINAES

// # Resultados
// ## Satisfação com os cursos - ok
// - Ano
// - Curso
// - Porcentagem

// ## Satisfação com o Biopark - ok
// - Ano
// - Porcentagem

// ## Satisfação com a infraestrutura - ok
// - Ano
// - Sala
// - Porcentagem

// # FAQ -ok
// - Pergunta
// - Resposta