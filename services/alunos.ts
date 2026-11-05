import { Aluno } from "@/types/aluno"

const CHAVE = "alunos";

export function carregaAlunos(): Aluno[] {
    const texto = localStorage.getItem(CHAVE)
    if (texto === null) {
        return [];
    }
    try {
        return JSON.parse(texto) as Aluno[];
    }  catch { 
        return [];
        }
} 


export function salvaAlunos(alunos: Aluno[]) {
    localStorage.setItem(CHAVE, JSON.stringify(alunos));
}