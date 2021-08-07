import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionAgendaProps } from 'types/api'

const SectionAgenda = ({ title, description }: SectionAgendaProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda

// import React from 'react'

// import Container from 'components/Container'
// import Heading from 'components/Heading'

// import * as S from './styles'
// import { SectionAgendaProps } from 'types/api'

// const SectionAgenda = ({ title, description }: SectionAgendaProps) => (
//   <Container id="agenda">
//     <Heading reverseColor>Curso 100% completo!</Heading>
//     <S.Text>
//       <p>
//         Todos os módulos do curso <strong>já foram lançados</strong>! E você
//         pode assistir todos no seu tempo, pois o acesso é vitalício.
//       </p>

//       <p>
//         Os módulos podem ser feitos em ordem ou você pode assistir conforme sua
//         necessidade.
//       </p>
//     </S.Text>
//   </Container>
// )

// export default SectionAgenda
