import { useState } from 'react';
import './Disciplinas.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Disciplinas = () => {
  // Estados para atividades
  const [atividades, setAtividades] = useState([
    { nome: 'Atividade 1', status: 'Concluido', id: 1, conteudoDeProva: false },
    { nome: 'Atividade 2', status: 'Pendente', id: 2, conteudoDeProva: true }
  ]);

  const [filtroAtividade, setFiltroAtividade] = useState(null);
  const [filtroProvaAtividade, setFiltroProvaAtividade] = useState(null);
  const [nomeDeNovaAtividade, setNomeDeNovaAtividade] = useState('');
  const [conteudoDeProva, setConteudoDeProva] = useState(false);

  const criarAtividade = (nome, conteudoDeProva) => {
    const novoId = atividades.length > 0 ? Math.max(...atividades.map(a => a.id)) + 1 : 1;
    return { nome, status: 'Pendente', id: novoId, conteudoDeProva };
  };

  const addAtividade = (e) => {
    e.preventDefault();
    const novaAtividade = criarAtividade(nomeDeNovaAtividade, conteudoDeProva);
    setAtividades([...atividades, novaAtividade]);
    setNomeDeNovaAtividade('');
    setConteudoDeProva(false);
  };

  const toggleFiltroStatusAtividade = (status) => {
    setFiltroAtividade(filtroAtividade === status ? null : status);
  };

  const toggleFiltroConteudoProvaAtividade = (conteudoDeProva) => {
    setFiltroProvaAtividade(filtroProvaAtividade === conteudoDeProva ? null : conteudoDeProva);
  };

  const filtragemAtividades = atividades.filter(atividade => {
    const statusMatch = !filtroAtividade || atividade.status === filtroAtividade;
    const conteudoDeProvaMatch = filtroProvaAtividade === null || atividade.conteudoDeProva === filtroProvaAtividade;
    return statusMatch && conteudoDeProvaMatch;
  });

  // Estados para aulas
  const [aulas, setAulas] = useState([
    { nome: 'Aula 1', status: 'Concluido', id: 1, conteudoDeProva: false },
    { nome: 'Aula 2', status: 'Pendente', id: 2, conteudoDeProva: true }
  ]);

  const [filtroAula, setFiltroAula] = useState(null);
  const [filtroProvaAula, setFiltroProvaAula] = useState(null);
  const [nomeDeNovaAula, setNomeDeNovaAula] = useState('');
  const [conteudoDeProvaAula, setConteudoDeProvaAula] = useState(false);

  const criarAula = (nome, conteudoDeProva) => {
    const novoId = aulas.length > 0 ? Math.max(...aulas.map(a => a.id)) + 1 : 1;
    return { nome, status: 'Pendente', id: novoId, conteudoDeProva };
  };

  const addAula = (e) => {
    e.preventDefault();
    const novaAula = criarAula(nomeDeNovaAula, conteudoDeProvaAula);
    setAulas([...aulas, novaAula]);
    setNomeDeNovaAula('');
    setConteudoDeProvaAula(false);
  };

  const toggleFiltroStatusAula = (status) => {
    setFiltroAula(filtroAula === status ? null : status);
  };

  const toggleFiltroConteudoProvaAula = (conteudoDeProva) => {
    setFiltroProvaAula(filtroProvaAula === conteudoDeProva ? null : conteudoDeProva);
  };

  const filtragemAulas = aulas.filter(aula => {
    const statusMatch = !filtroAula || aula.status === filtroAula;
    const conteudoDeProvaMatch = filtroProvaAula === null || aula.conteudoDeProva === filtroProvaAula;
    return statusMatch && conteudoDeProvaMatch;
  });

  return (
    <body className="rounded-sm h-screen bg-gray-300">
      <div className="ml-60 rounded-sm h-screen bg-gray-300 shadow-2xl">
        <>
          <div className="p-5">
            <h1 className="text-3xl p-5 rounded bg-gray-500 w-60 text-center text-white font-bold">Disciplinas</h1>

            {/* Seção de Atividades */}
            <Popup trigger={<button className="mt-4 rounded bg-gray-500 p-2 text-white font-semibold">Adicionar nova Atividade</button>}
              position={'right center'}>
              <div>
                <form onSubmit={addAtividade}>
                  <h3 className="m-1">Digite qual será o Titulo da nova atividade:</h3>
                  <input className="rounded border border-black" type="text"
                    value={nomeDeNovaAtividade}
                    onChange={(e) => setNomeDeNovaAtividade(e.target.value)}
                  />
                  <label className="m-1 flex">
                    <input className="mr-1" type="checkbox"
                      checked={conteudoDeProva}
                      onChange={(e) => setConteudoDeProva(e.target.checked)}
                    />
                    Conteúdo de prova
                  </label>
                  <button type="submit" className="ml-4 rounded bg-green-500 p-1 text-white font-bold">Adicionar Atividade</button>
                </form>
              </div>
            </Popup>

            <div className="border border-black rounded bg-white w-2/6 mt-4">
              <div className="p-2 mt-3">
                <button className={`mr-4 rounded bg-blue-400 p-2 text-white font-bold ${filtroAtividade === 'Concluido' ? 'bg-blue-600 shadow-inner' : 'bg-blue-400'}`} onClick={() => toggleFiltroStatusAtividade('Concluido')}>Concluido</button>
                <button className={`mr-4 rounded bg-orange-300 p-2 text-white font-bold ${filtroAtividade === 'Pendente' ? 'bg-orange-500 shadow-inner' : 'bg-orange-300'}`} onClick={() => toggleFiltroStatusAtividade('Pendente')}>Pendente</button>
                <button className={`rounded bg-red-400 p-2 text-white font-bold ${filtroProvaAtividade === true ? 'bg-red-600 shadow-inner' : 'bg-red-400'}`} onClick={() => toggleFiltroConteudoProvaAtividade(true)}>Conteúdo de Prova</button>
              </div>

              <div className="mt-2 bg-white min-h-28 p-2 font-semibold">
                <ListaDeAtividades atividades={filtragemAtividades} />
              </div>
            </div>

            {/* Seção de Aulas */}
            <Popup trigger={<button className="mt-4 rounded bg-gray-500 p-2 text-white font-semibold">Adicionar nova Aula</button>}
              position={'right center'}>
              <div>
                <form onSubmit={addAula}>
                  <h3 className="m-1">Digite qual será o Titulo da nova aula:</h3>
                  <input className="rounded border border-black" type="text"
                    value={nomeDeNovaAula}
                    onChange={(e) => setNomeDeNovaAula(e.target.value)}
                  />
                  <label className="m-1 flex">
                    <input className="mr-1" type="checkbox"
                      checked={conteudoDeProvaAula}
                      onChange={(e) => setConteudoDeProvaAula(e.target.checked)}
                    />
                    Conteúdo de prova
                  </label>
                  <button type="submit" className="ml-4 rounded bg-green-500 p-1 text-white font-bold">Adicionar Aula</button>
                </form>
              </div>
            </Popup>

            <div className="border border-black rounded bg-white w-2/6 mt-4">
              <div className="p-2 mt-3">
                <button className={`mr-4 rounded bg-blue-400 p-2 text-white font-bold ${filtroAula === 'Concluido' ? 'bg-blue-600 shadow-inner' : 'bg-blue-400'}`} onClick={() => toggleFiltroStatusAula('Concluido')}>Concluido</button>
                <button className={`mr-4 rounded bg-orange-300 p-2 text-white font-bold ${filtroAula === 'Pendente' ? 'bg-orange-500 shadow-inner' : 'bg-orange-300'}`} onClick={() => toggleFiltroStatusAula('Pendente')}>Pendente</button>
                <button className={`rounded bg-red-400 p-2 text-white font-bold ${filtroProvaAula === true ? 'bg-red-600 shadow-inner' : 'bg-red-400'}`} onClick={() => toggleFiltroConteudoProvaAula(true)}>Conteúdo de Prova</button>
              </div>

              <div className="mt-2 bg-white min-h-28 p-2 font-semibold">
                <ListaDeAulas aulas={filtragemAulas} />
              </div>
            </div>
          </div>
        </>
      </div>
    </body>
  );
}

function ListaDeAtividades({ atividades }) {
  return (
    <ul>
      {atividades.map(atividade => (
        <Atividade key={atividade.id} atividade={atividade} />
      ))}
    </ul>
  );
}

function Atividade({ atividade }) {
  return (
    <li className="justify-between border border-gray-300 rounded p-1">
      {atividade.nome} - {atividade.status} - Conteúdo de Prova: {atividade.conteudoDeProva ? 'Sim' : 'Não'}
      <Popup trigger={<button className="ml-3 rounded bg-blue-400 text-white p-1">Acessar</button>} position={'center center'} modal>
        <div>Conteúdo da Atividade</div>
      </Popup>
    </li>
  );
}

function ListaDeAulas({ aulas }) {
  return (
    <ul>
      {aulas.map(aula => (
        <Aula key={aula.id} aula={aula} />
      ))}
    </ul>
  );
}

function Aula({ aula }) {
  return (
    <li className="justify-between border border-gray-300 rounded p-1">
      {aula.nome} - {aula.status} - Conteúdo de Prova: {aula.conteudoDeProva ? 'Sim' : 'Não'}
      <Popup trigger={<button className="ml-3 rounded bg-blue-400 text-white p-1">Acessar</button>} position={'center center'} modal>
        <div>Conteúdo da Aula</div>
      </Popup>
    </li>
  );
}

export default Disciplinas;
