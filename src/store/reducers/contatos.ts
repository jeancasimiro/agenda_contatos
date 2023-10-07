import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      name: 'Jean',
      email: 'casimiro@gmail.com',
      tell: '14998862701'
    },
    {
      id: 2,
      name: 'Marcos',
      email: 'Marcos@gmail.com',
      tell: '12312658762'
    },
    {
      id: 3,
      name: 'Paula',
      email: 'Paula@gmail.com',
      tell: '74568273859'
    },
    {
      id: 4,
      name: 'Carla',
      email: 'Carla@gmail.com',
      tell: '82982792223'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contatoExistente) {
        alert('Este contato já está na agenda.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novaTarefa)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
