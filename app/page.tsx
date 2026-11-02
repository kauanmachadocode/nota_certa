"use client"
import { useState } from "react";
import { Aluno } from "@/types/aluno"


export default function Home() {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [nome, setNome] = useState('');
  
  const adicionaAluno = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault()
      const aluno: Aluno = {id: crypto.randomUUID(),
        nome: nome
      }
      setAlunos([...alunos, aluno]);
      setNome("");
    }
  // TODO(você): função que atualiza o texto digitado
  return (
    <main className="mx-auto max-w-xl p-4 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">Meus alunos</h1>

      
      <form className="mb-6 flex gap-2"
      onSubmit={adicionaAluno}>
        <label htmlFor="nome" className="sr-only">
          Nome do aluno
        </label>
        <input
          id="nome"
          type="text"
          placeholder="Nome do aluno"
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={nome}
          onChange={(event)=>setNome(event.target.value)}
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>

      { alunos.length===0 ? (<p className="text-slate-500">Nenhum aluno cadastrado ainda.</p>) : ( <ul className="space-y-2">

        { alunos.map((aluno) => (<li key={aluno.id} className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
          { aluno.nome }
        </li>)) }
        
      </ul>) }
      

     
    </main>
  );
}