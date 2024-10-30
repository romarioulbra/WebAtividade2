// types.ts
export type Producao = {
  id: number;
  titulo: string;
  ano: number;
  genero: string;
  descricao: string;
  avaliacao: number; // de 1 a 5
  tipo: 'Filme' | 'Serie';
  duracao?: number; // para filmes
  temporadas?: number; // para séries
};
