import { ConcessionariaDao } from './concessionariaDao'
import Concessionaria from './concessionaria'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])

dao.insert(concessionaria)