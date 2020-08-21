import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

// Solid Icons
import {
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
} from '@fortawesome/free-solid-svg-icons'

// Brand Icons
import {
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
