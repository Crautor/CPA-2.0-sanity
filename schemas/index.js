import TermosRegulamentos from './termos-regulamentos'
import qrcode from './qrcode'
import diretrizes from './diretrizes'
import membros from './membros'
import objetivo from './objetivo'
import pontosPositivos from './pontos-positivos'

export const schemaTypes = [TermosRegulamentos, qrcode, diretrizes, membros, objetivo] 
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

// ## Pontos positivos
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
// ## Satisfação com os cursos
// - Ano
// - Curso
// - Porcentagem

// ## Satisfação com o Biopark
// - Ano
// - Porcentagem

// ## Satisfação com a infraestrutura
// - Ano
// - Sala
// - Porcentagem

// # FAQ
// - Pergunta
// - Resposta