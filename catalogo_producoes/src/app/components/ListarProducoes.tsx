// src/app/components/ListaProducoes.tsx
'use client';

import { Producao } from '../types/types';
import FormularioProducao from '../components/FormularioProducao'

type ListaProducoesProps = {
  producoes: Producao[];
  setProducaoAtual: (producao: Producao | null) => void;
  setProducoes: (producoes: Producao[]) => void;
};

export default function ListaProducoes({
  producoes,
  setProducaoAtual,
  setProducoes,
}: ListaProducoesProps) {
  const excluirProducao = (id: number) => {
    const producao = producoes.find((p) => p.id === id);
    if (producao && producao.avaliacao > 3) {
      alert('Produções com avaliação acima de 3 não podem ser excluídas.');
      return;
    }
    const novasProducoes = producoes.filter((p) => p.id !== id);
    setProducoes(novasProducoes);
    localStorage.setItem('producoes', JSON.stringify(novasProducoes));
  };

  return (
    <div className='mb-4'>
      <h2 className="text-2xl mb-4">Lista de Produções</h2>
      {producoes.length === 0 ? (
        <p className='text-center text-red-600'>Nenhuma produção cadastrada.</p>
      ) : (
        <ul className="list-group">
          {producoes.map((p) => (
            <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{p.titulo} ({p.ano})</h5>
                <p className="mb-1"><strong>Gênero:</strong> {p.genero}</p>
                <p className="mb-1"><strong>Avaliação:</strong> {p.avaliacao} estrelas</p>
              </div>
              <div className="d-flex gap-2">
                <button
                  onClick={() => setProducaoAtual(p)}
                  className="btn btn-warning btn-sm"
                >
                  Editar
                </button>
                <button
                  onClick={() => excluirProducao(p.id)}
                  className="btn btn-danger btn-sm"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
