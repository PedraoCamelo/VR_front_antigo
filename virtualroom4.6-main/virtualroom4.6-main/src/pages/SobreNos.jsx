import React from "react";
import imagem from "../assets/about-img.svg";

const SobreNos = () => {
  return (
    <body className="   rounded-sm h-screen bg-gray-300 ">
      <div className="ml-60 rounded-sm h-screen bg-gray-300 shadow-2xl ">
        <div className=" p-5">
          <h1 className=" text-3xl p-5 rounded bg-gray-500 w-60 text-center text-white text-font font-bold">
            Sobre nós
          </h1>

          <div className=" m-4 bg-white p-4 rounded ">
            <div className=" m-3 p-3 bg-gray-300 rounded ">
              <h2 className=" text-2xl font-semibold ">Nossa Historia</h2>
              <span className=" text-xl font-medium">
                A Tech Innovate começou como uma pequena equipe de entusiastas
                da tecnologia com uma visão ousada: criar soluções de software
                que moldam o futuro. Com uma abordagem centrada no usuário e uma
                paixão pela inovação, a empresa rapidamente ganhou destaque no
                cenário tecnológico. Seus produtos intuitivos e impactantes
                conquistaram a confiança de clientes e investidores,
                impulsionando o crescimento da empresa ao longo dos anos. Hoje,
                a Tech Innovate é uma líder reconhecida no desenvolvimento de
                software, conhecida por sua cultura inclusiva e foco incansável
                na excelência. Com uma equipe talentosa e uma determinação
                inabalável, a empresa continua a redefinir os limites da
                tecnologia, transformando ideias em realidade e inspirando o
                progresso em todo o mundo.
              </span>
            </div>

            <div className=" m-3 p-3 bg-gray-300 rounded ">
              <h3 className=" text-2xl font-semibold ">Missão</h3>
              <span className=" text-xl font-medium">
                Na Tech Innovate, nossa missão é impulsionar a inovação e
                simplificar a vida das pessoas por meio do desenvolvimento de
                software de qualidade excepcional. Estamos comprometidos em
                criar soluções tecnológicas acessíveis e capacitadoras que
                atendam às necessidades de nossos clientes e promovam o
                progresso em todas as áreas da sociedade.
              </span>
            </div>

            <div className=" m-3 p-3 bg-gray-300 rounded ">
              <h3 className=" text-2xl font-semibold ">Visão</h3>
              <span className=" text-xl font-medium">
                Nossa visão na Tech Innovate é liderar o caminho na vanguarda da
                tecnologia, criando um futuro onde a tecnologia seja uma força
                positiva e transformadora na vida das pessoas. Acreditamos em um
                mundo onde a inovação é ilimitada e onde nossos produtos ajudam
                a moldar um amanhã mais brilhante e conectado para todos.
              </span>
            </div>

            <div className=" m-3 p-3 bg-gray-300 rounded ">
              <h3 className=" text-2xl font-semibold ">Valores</h3>
              <span className=" text-xl font-medium">
                Na Tech Innovate, nossa jornada é impulsionada pela inovação
                constante, onde cada membro da equipe é inspirado a buscar
                soluções tecnológicas criativas e disruptivas. A excelência é o
                nosso padrão, desde o desenvolvimento de software até o suporte
                ao cliente, garantindo que entregamos produtos e serviços da
                mais alta qualidade. Mantemos uma cultura de integridade,
                transparência e respeito, onde a colaboração é valorizada e
                reconhecida como essencial para o nosso sucesso. Capacitamos
                nossos clientes e colaboradores, fornecendo soluções acessíveis
                e intuitivas que os ajudam a alcançar todo o seu potencial.
                Estes valores fundamentais não apenas guiam nossas ações
                diárias, mas também moldam nosso compromisso de fazer uma
                diferença positiva no mundo através da tecnologia.
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </body>
  );
};

export default SobreNos;
