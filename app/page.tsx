"use client"
import { useState } from "react";
import { Aluno } from "@/types/aluno"


export default function Home() {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  
  const adicionaAluno = (event: React.SubmitEvent<HTMLFormElement>) => { event.preventDefault()
      const nomeValido = nome.trim()
      if (nomeValido === '') {
        setErro('Digite o nome corretamente')
        return;
      }
      const aluno: Aluno = {id: crypto.randomUUID(),
        nome: nomeValido
      }
      setAlunos([...alunos, aluno]);
      setNome("");
      setErro('');
    }

  const removeAluno = (id: string) => {setAlunos(alunos.filter((aluno)=> aluno.id!==id))}

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
          onChange={(event)=>{setNome(event.target.value), setErro('')}}
          aria-invalid={ erro !== '' ? true : false}
          aria-describedby={ erro ? "erro-nome" : undefined}
        />
        
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>

      { erro && (<p id="erro-nome" role="alert" className="mt-2 text-sm text-red-600">
          { erro }
        </p>
)}

      { alunos.length===0 ? (<p className="text-slate-500">Nenhum aluno cadastrado ainda.</p>) : ( <ul className="space-y-2">

        { alunos.map((aluno) => (<li
  key={aluno.id}
  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
>
  <span>{aluno.nome}</span>
  <button
    type="button"
    onClick={() => removeAluno(aluno.id)}
    aria-label={`Remover ${aluno.nome}`}
    className="rounded-md px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50"
  >
    Remover
  </button>
</li>)) }
        
      </ul>) }
      

     
    </main>
  );
}