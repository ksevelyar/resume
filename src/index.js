require('./resume.sass')

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faBook, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faClock, faEnvelope, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
  faCheckSquare, faBook, faUniversity,
  faClock, faEnvelope, faFileAlt,
  faGithub
)
dom.watch()
