'use client'

// src/app/components/FormularioProducao.tsx
'use client';

import { useState, useEffect } from 'react';
import { Producao } from '../types/types'; // Ajuste o caminho conforme necessário

type FormularioProducaoProps = {
  onSave: (producao: Producao) => void;
  producaoAtual?: Producao | null;
  onCancel: () => void;
};

export default function FormularioProducao({
  onSave,
  producaoAtual,
  onCancel,
}: FormularioProducaoProps) {
  const [producao, setProducao] = useState<Producao>({
    id: Date.now(),
    titulo: '',
    ano: new Date().getFullYear(),
    genero: '',
    descricao: '',
    avaliacao: 0,
    tipo: 'Filme',
  });

  useEffect(() => {
    if (producaoAtual) {
      setProducao(producaoAtual);
    }
  }, [producaoAtual]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProducao({ ...producao, [name]: value });
  };

  const handleSubmit = () => {
    onSave(producao);
    setProducao({
      id: Date.now(),
      titulo: '',
      ano: new Date().getFullYear(),
      genero: '',
      descricao: '',
      avaliacao: 0,
      tipo: 'Filme',
    });
  };

  return (
    <>
    <h2 className="text-2xl mb-4">Cadastro de Filmes/Séries</h2>
    <form className="p-3">
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          name="titulo"
          value={producao.titulo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ano" className="form-label">Ano</label>
        <input
          type="number"
          className="form-control"
          id="ano"
          name="ano"
          value={producao.ano}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="genero" className="form-label">Gênero</label>
        <input
          type="text"
          className="form-control"
          id="genero"
          name="genero"
          value={producao.genero}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descricao" className="form-label">Descrição</label>
        <textarea
          className="form-control"
          id="descricao"
          name="descricao"
          rows={3}
          value={producao.descricao}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tipo" className="form-label">Tipo de Produção</label>
        <select
          className="form-select"
          id="tipo"
          name="tipo"
          value={producao.tipo}
          onChange={handleChange}
        >
          <option value="Filme">Filme</option>
          <option value="Serie">Série</option>
        </select>
      </div>
      <div className="d-flex gap-2">
        <button type="button" onClick={handleSubmit} className="btn btn-primary">
          Salvar
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancelar
        </button>
      </div>
    </form>
    </>
  );
}
