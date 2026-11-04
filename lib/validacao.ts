export function nomeValido(nome: string): boolean{
    const nomeTratado = nome.trim()
    return nomeTratado!==''
}