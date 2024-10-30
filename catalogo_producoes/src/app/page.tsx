'use client'
// src/app/page.tsx
import { useState } from 'react';
import FormularioProducao from './components/FormularioProducao';
import { Producao } from './types/types';
import ListarProducoes from './components/ListarProducoes';

export default function Home() {
  const [producoes, setProducoes] = useState<Producao[]>([]);
  const [producaoAtual, setProducaoAtual] = useState<Producao | null>(null);

  const handleSave = (novaProducao: Producao) => {
    let novasProducoes;
    if (producaoAtual) {
      novasProducoes = producoes.map((p) => (p.id === novaProducao.id ? novaProducao : p));
    } else {
      novasProducoes = [...producoes, novaProducao];
    }
    setProducoes(novasProducoes);
    localStorage.setItem('producoes', JSON.stringify(novasProducoes));
    setProducaoAtual(null);
  };

  const handleCancel = () => setProducaoAtual(null);
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 text-4xl">Catálogo de Produções Audiovisuais</h1>
      <hr className='mb-4 text-red-600'/>
      <div className="row">
          <div className="col-md-6">
            <FormularioProducao 
              onSave={handleSave} 
              producaoAtual={producaoAtual} 
              onCancel={handleCancel}
            />
          </div>
          <div className="col-md-6">
              <ListarProducoes
              producoes={producoes} 
              setProducaoAtual={setProducaoAtual} 
              setProducoes={setProducoes} 
              
              
              />
          </div>  
      </div>
    </div>
  );
}
