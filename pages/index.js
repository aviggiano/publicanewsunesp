/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const people = [
  {title: "José Luis Bizelli", img:'/img/jose.png', description: "Fez Arquitetura na PUC de Campinas (1980), estudando conjuntos habitacionais na periferia da cidade. Mestrado no Programa de Pós-graduação em Sociologia da Faculdade de Ciências e Letras, Unesp de Araraquara (1990), área de concentração em Sociologia Urbana, analisando o planejamento como ferramenta do poder local para a especulação urbana. Doutorado em Sociologia, no mesmo Programa (2003), trabalhando o tema da administração gerencial e seus impactos nas estruturas administrativas locais. Fez seu estágio pós-doutoral na Universidade de Alcalá de Henares (2013), Espanha, trabalhando com questões ligadas às tecnologias educativas. É Livre Docente pela Unesp em Gestão de Políticas Públicas (2013)."},
  {title: "Thais Vargas Bizelli", img:'/img/thais.png', description: "Formada pelo Centro Estadual de Educação Tecnológica Paula Souza como Técnica em Administração (2010). Graduada em Administração Pública (2017) pela Universidade Estadual Paulista Júlio de Mesquita Filho, Campus de Araraquara (FCLAr). Mestra pelo programa de pós-graduação em Educação Escolar da Universidade Estadual Paulista Júlio de Mesquita Filho, Campus de Araraquara (FCLAr). Doutoranda pelo programa de pós-graduação em Educação Escolar da Universidade Estadual Paulista Júlio de Mesquita Filho, Campus de Araraquara (FCLAr). Foi bolsista PIBIC-CNPQ do projeto Análise de processos inovadores no governo do território paulista (2014-2017), no qual participou como pesquisadora durante a graduação. No mestrado, foi bolsista Capes de janeiro de 2018 até a conclusão do curso (junho/2019). Realizou intercâmbio acadêmico na Univerdad Nacional del Litoral, na Argentina, como bolsista AUGM (2016). Faz parte do corpo editorial da Revista Ibero-Americana de Estudos em Educação, realizando função de revisora."}
]

const projects = [
  {title: 'Login Page', img: '/img/login.jpg', href: '/login'},
  {title: 'Profile Page', img: '/img/login.jpg', href:'/profile'},
  {title: 'Landing Page', img: '/img/landing.jpg', href: '/'},
]

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header container mx-auto flex-col justify-center relative pt-16 items-center flex h-screen max-h-860-px md:flex-row">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Publica News
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Publica News é um espaco para divulgação dos projetos de intervenção idealizado na disciplina Estado Governo e Administração da Unesp.
              </p>
              <div className="mt-12">
                <a
                  href="https://airtable.com/shrswvtHV2tzfY3Nl"
                  className="github-star text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Envie o seu projeto
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative b-auto right-0 pt-16 sm:w-6/12 sm:mt-0 w-6/12 md:absolute"
          src="/img/unesp.png"
          alt="Unesp"
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-6/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
                <div className="w-full md:w-12/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-book-open"></i>
                      </div>
                      <h3 id="apresentacao" className="text-3xl mb-2 font-semibold leading-normal">
                        Apresentação
                      </h3>
                      <p className="mb-4 text-blueGray-500">
                      Publica News foi desenvolvido pelo professor José Luis Bizelli, do departamento de Antropologia, Política e Filosofia, durante a disciplina "Estado, Governo e Administração". A intencao é aproximar os alunos do primeiro ano de Administração Publica das demandas sociais do município de Araraquara através de um projeto de intervenção que deve "resolver um problema". Para isso, todos os anos, são organizados grupos entre os estudantes da disciplina, em que o primeiro semestre é voltado para idealização do projeto e o segundo é voltado para a prática. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-landmark text-xl"></i>
              </div>
              <h3 id="historico" className="text-3xl mb-2 font-semibold leading-normal">
                Histórico
              </h3>
              <p className="mb-4 text-blueGray-500">
                Publica News foi criado em xxxx, idealizado pelo professor José Luis Bizelli, inicialmente como um projeto de disciplina, e que ganhou este nome após uma ex-aluna realizar a criação de um site onde os projetos pudessem ser compartilhados entre os colegas. 
              </p>
              
              <a
                href="https://airtable.com/shrtyxMf2u80BwVx5"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Explorar{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="Crianças brincando"
                  src="https://images.unsplash.com/photo-1444840535719-195841cb6e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded absolute shadow-lg -top-150-px z-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Projetos anteriores</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Acompanhe os projetos anteriores da disciplina Estado Governo e Administração
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                {
                  projects.map((project) => (
                    <div className="w-full lg:w-4/12 px-4">
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        {project.title}
                      </h5>
                      <Link href={project.href}>
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                          <img
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg"
                            src={project.img}
                          />
                        </div>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-col flex-wrap justify-center">
            <h2 id="idealizadores" className="text-4xl mb-2 text-center font-semibold leading-normal text-white">
              Idealizadores
            </h2>
            {
              people.map((people) => (
                <div className="flex flex-wrap w-full mt-12">
                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-4 relative flex flex-row justify-center items-center">
                    <img
                      className="rounded-full w-6/12"            
                      style={{filter:'grayscale(1)', height: 'fit-content'}}            
                      src={people.img}           
                      alt={people.title}           
                    />            
                  </div>            
                  <div className="w-full md:w-8/12 px-12 md:px-4 ml-auto mr-auto">            
                    <h6 className="text-2xl font-bold leading-relaxed mt-4 mb-4 text-blueGray-400">            
                      {people.title}           
                    </h6>            
                    <p className="text-sm font-light leading-relaxed mt-4 mb-4 text-blueGray-400">            
                      {people.description}           
                    </p>            
                  </div>            
                </div>            
                )
              )
            }
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
