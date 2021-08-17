import crud from '../Hooks/useCRUD'
import {Agents} from "./apiUrl";

export  const add=crud({
    name:'Agents',
    func:Agents
})