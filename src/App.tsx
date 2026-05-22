/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Eye, 
  Users, 
  Briefcase,
  Instagram
} from "lucide-react";

const FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfFsFzeDyNfmNSj_OZL5kDGKUZh2s_jKL0ayayl_NzdZIfgDg/viewform";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#110f0d] text-white font-sans selection:bg-[#c09473] selection:text-white">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://drive.google.com/thumbnail?id=1-U2oTuSOYuZQHREiH9VZTyy3XvES1tmC&sz=w2000" 
            alt="Naty background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#110f0d]/80 via-transparent to-[#110f0d]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col h-full pt-[33.35px] md:pt-0 md:justify-center items-center w-full max-w-[360px] md:max-w-none">
          <motion.p 
            {...fadeIn}
            className="text-[#c09473] tracking-[0.3em] text-[13px] md:text-sm font-medium mt-[10px] md:mt-0 mb-[21px] pb-[49px] h-[37px] md:pb-0 md:mb-6 md:h-auto uppercase"
          >
            Mentoria com a Naty
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-8 mt-[141px] md:mt-0 relative"
          >
            <h1 className="text-[27px] md:text-7xl font-serif text-white mb-1 md:mb-2 leading-tight">
              Aprenda um novo jeito de
            </h1>
            <h2 className="text-[29px] md:text-7xl font-serif text-[#c09473] italic mt-[1px] mx-[-4px] md:mt-0 md:mx-0">
              trabalhar com confeitaria
            </h2>
          </motion.div>

          <motion.p 
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-400 text-[16px] md:text-[21px] leading-[22.75px] md:leading-[32.5px] mt-[80px] mb-8 md:mb-10 text-center"
          >
            Ao invés de continuar sozinha e perder tempo, eu vou te direcionar e cobrar suas ações em cada etapa durante os próximos 6 meses.
          </motion.p>

          <motion.a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#c09473] text-[#110f0d] px-8 py-3 pt-[10px] md:px-10 md:py-5 md:pt-5 rounded-full font-bold text-sm md:text-lg transition-colors hover:bg-[#d4a883] mt-[12px] md:mt-4 shadow-xl"
          >
            Quero me candidatar <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>

      {/* Quem é a Naty Section */}
      <section id="sobre" className="py-24 bg-[#0a0908]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              {...fadeIn}
              className="lg:w-1/2"
            >
              <p className="text-[#c09473] tracking-widest text-[13px] font-bold uppercase mb-6 text-center md:hidden">Quem é Naty</p>
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#c09473]/10 rounded-2xl blur-2xl group-hover:bg-[#c09473]/20 transition-all duration-500" />
                <img 
                  src="https://drive.google.com/thumbnail?id=1GWOXt-X8cPXRU3r2vNc0v_4ztSiV7jYe&sz=w2000" 
                  alt="Naty - Mentora" 
                  referrerPolicy="no-referrer"
                  className="relative rounded-2xl w-[283px] h-[349px] mt-[-1px] md:mt-0 md:w-full md:h-auto mx-auto object-cover shadow-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="lg:w-1/2 space-y-8 mt-[-13px] md:mt-0 leading-[24px] md:leading-normal mb-1 md:mb-0"
            >
              <div>
                <p className="hidden md:block text-[#c09473] tracking-widest text-xs font-bold uppercase mb-4">Quem é Naty</p>
                <h2 className="text-[19px] md:text-5xl font-serif leading-tight">
                  O método que eu usei para construir a Doces da Naty pode ser aplicado no seu negócio
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-400 leading-relaxed text-[16px] md:text-lg">
                <p className="text-[15px] md:text-lg">
                  Prazer, eu sou a Natascha, fundadora da Doces da Naty e confeiteira.
                </p>
                <p className="text-[13px] md:text-lg text-justify md:text-left">
                  Em 2017, decidi dar um passo corajoso: deixei 9 anos de estabilidade como supervisora de cobrança no regime CLT para mergulhar em um mundo onde eu não tinha nenhuma experiência, mas sobrava determinação. Comecei do zero, na cozinha do meu apartamento, e foi ali, entre erros e acertos, que conquistei meus primeiros clientes.
                </p>
                <p className="text-[13px] md:text-lg text-justify md:text-left">
                  Foram 3 anos trabalhando em casa. Investi muito em conhecimento, errei receitas, joguei ingredientes fora, mas nunca desisti. Hoje, vejo minha marca crescer e encantar não só clientes, mas também alunos e colegas de profissão.
                </p>
                <p className="text-[13px] md:text-lg text-justify md:text-left">
                  Meu propósito hoje é claro: ajudar você, que está começando ou já atua na confeitaria, a ser reconhecida pelo seu trabalho e a conquistar a tão sonhada liberdade financeira. Eu já estive onde você está, e agora quero te mostrar o caminho para o sucesso.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.p {...fadeIn} className="text-[#c09473] tracking-widest text-xs font-bold uppercase mb-6">Benefícios</motion.p>
          <motion.h2 {...fadeIn} className="text-[20px] md:text-5xl font-serif leading-[31.5px] md:leading-tight mt-[6px] md:mt-0 mb-[65px] md:mb-16">O que muda na sua vida ao entrar</motion.h2>

          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          >
            {[
              { 
                icon: <Instagram className="text-[#c09473] w-4 h-4 md:w-5 md:h-5" />, 
                title: "Venda com suas redes sociais", 
                desc: "Uma análise profissional do seu Instagram com orientações para posicionamento, crescimento e apresentação.",
                titleClass: "text-sm md:text-[17px]",
                descClass: "text-[12px]"
              },
              { 
                icon: <Target className="text-[#c09473] w-4 h-4 md:w-5 md:h-5" />, 
                title: "Serei sua “chefe” nos próximos 6 meses", 
                desc: "Da mesma forma que irei te ensinar o que e como fazer, também irei cobrar suas as ações, afinal, se você não colocar a mão na massa, não verá resultados.",
                titleClass: "text-[13px] md:text-[16px]",
                descClass: "text-[11px]"
              },
              { 
                icon: <Briefcase className="text-[#c09473] w-4 h-4 md:w-5 md:h-5" />, 
                title: "Pare de fazer renda extra e faça da confeitaria sua renda principal", 
                desc: "Chega de fazer apenas receitas, aprenda como se destacar no meio de tantas confeiteiras e seja reconhecida na sua cidade.",
                titleClass: "text-[13px] mt-[-2px] leading-[16.5714px] md:text-[15px] md:mt-0 md:leading-normal",
                descClass: "text-[11px]"
              },
              { 
                icon: <TrendingUp className="text-[#c09473] w-4 h-4 md:w-5 md:h-5" />, 
                title: "Estratégias usadas na Doces da Naty", 
                desc: "Pare de tentar adivinhar o que fazer, saiba quais serão os próximos passos estratégicos para sua empresa vender mais.",
                titleClass: "text-[13px] md:text-[16px]",
                descClass: "text-[11px]"
              },
              { 
                icon: <Star className="text-[#c09473] w-4 h-4 md:w-5 md:h-5" />, 
                title: "Resultados reais", 
                desc: "Aumente suas vendas com ações práticas e aplicáveis no dia a dia.",
                titleClass: "text-sm md:text-[16px] md:text-left",
                descClass: "text-[11px] text-center md:text-left"
              }
            ].map((item: any, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-[#1a1816] p-4 md:p-6 rounded-2xl border border-white/5 text-center md:text-left hover:border-[#c09473]/30 transition-all group"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#c09473]/10 rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                  {item.icon}
                </div>
                <h3 className={`font-bold mb-2 md:mb-3 ${item.titleClass || 'text-sm md:text-lg'}`}>{item.title}</h3>
                <p className={`text-gray-400 leading-relaxed md:text-sm ${item.descClass || 'text-[10px]'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Section */}
      <section id="conteudo" className="py-24 bg-[#1a1816]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mt-[1px] mb-[1px]">
            <motion.p {...fadeIn} className="text-[#c09473] tracking-widest text-xs font-bold uppercase mb-6">Conteúdo</motion.p>
            <motion.h2 {...fadeIn} className="text-[23px] md:text-5xl font-serif leading-[37px] md:leading-tight mb-16">
              O que você recebe ao entrar na <span className="text-[#c09473]">mentoria</span>
            </motion.h2>

            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4"
            >
              {[
                "Mentoria durante 6 meses.",
                "Acesso a 1 curso da sua preferência.",
                "Desconto de 60% em um segundo curso.",
                "Reunião mensal de 2 horas comigo.",
                "Monitoramento do perfil e feedbacks.",
                "Acesso a minha experiência e as estratégias que existem por trás da Doces da Naty."
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 bg-[#110f0d] p-4 md:p-6 rounded-2xl border border-white/5 text-center md:text-left"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c09473]/20 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-[#c09473]" />
                  </div>
                  <p className="text-[11px] md:text-lg text-gray-200">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Para quem é Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div {...fadeIn}>
              <p className="text-[#c09473] tracking-widest text-xs font-bold uppercase mb-4">Para quem é</p>
              <h2 className="text-[23px] md:text-4xl font-serif mb-12">Essa mentoria <span className="text-[#c09473] italic">é para você</span></h2>
              <ul className="space-y-8">
                {[
                  "Confeiteira experiente que precisa dar o próximo passo, está estagnada e não consegue enxergar onde está errando.",
                  "Confeiteira que só sabe receita e ainda não domina as partes mais importantes para ter um negócio.",
                  "Iniciante que precisa de direcionamento sobre como começar (a mentoria não ensina receitas).",
                  "Quem está disposta a receber críticas e tem compromisso para aplicar as tarefas.",
                  "Empreendedor do ramo de alimentação em geral — açaí, cafeteria, marmitas e afins."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Check size={20} className="text-[#c09473] mt-1 flex-shrink-0" />
                    <p className="text-[14px] md:text-lg text-gray-400 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn}>
              <p className="text-red-500 tracking-widest text-xs font-bold uppercase mb-4">Para quem não é</p>
              <h2 className="text-[24px] md:text-4xl font-serif mb-12">Por favor, <span className="text-red-500 italic">nem entre</span></h2>
              <ul className="space-y-8">
                {[
                  "Para quem está em busca de receitas.",
                  "Para quem é mimizenta, só reclama, se vitimiza demais ou é preguiçosa — por favor, nem entre.",
                  "Para quem acha que vai investir e não vai precisar fazer nada. Faço minha parte, milagre não.",
                  "Para quem tem uma desculpa pronta para cada solução apresentada."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <X size={20} className="text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-[14px] md:text-lg text-gray-400 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://drive.google.com/thumbnail?id=1tATl__TdSoHqgUG3KYtKdnPmTrAW2OEA&sz=w2000" 
            alt="Final CTA background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-[#110f0d]/90" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            {...fadeIn}
            className="inline-flex items-center gap-2 bg-red-950/30 border border-red-500/30 text-red-500 px-4 py-2 rounded-full text-[11px] md:text-xs font-bold uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Vagas limitadas — turma com seleção
          </motion.div>

          <motion.h2 
            {...fadeIn}
            className="text-[27px] md:text-6xl font-serif mb-6 md:mb-8 leading-tight"
          >
            Sua próxima versão como <br className="hidden md:block" /> confeiteira começa <span className="text-[#c09473] italic">agora</span>.
          </motion.h2>

          <motion.p 
            {...fadeIn}
            className="max-w-3xl mx-auto text-gray-400 text-[13px] md:text-[22px] mb-8 md:mb-12"
          >
            A mentoria não é para todo mundo, eu faço uma seleção minuciosa, analiso se você realmente está pronta para ter meu acompanhamento. <br className="hidden md:block" />
            Por isso, preencha sua aplicação.
          </motion.p>

          <motion.a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#c09473] text-[#110f0d] px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-[14px] md:text-lg transition-colors hover:bg-[#d4a883]"
          >
            Quero me candidatar <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0908] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 font-serif text-sm md:text-xl italic">Mentoria com a Naty</p>
            
            <div className="flex items-center gap-4 md:gap-8">
              <a href="https://instagram.com/cursosdocesdanaty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#c09473] transition-colors">
                <Instagram size={16} className="md:w-5 md:h-5" />
                <span className="text-[10px] md:text-sm">@cursosdocesdanaty</span>
              </a>
              <a href="https://instagram.com/docesdanaty___" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#c09473] transition-colors">
                <Instagram size={16} className="md:w-5 md:h-5" />
                <span className="text-[10px] md:text-sm">@docesdanaty___</span>
              </a>
            </div>
            
            <p className="text-gray-600 text-[10px] md:text-sm">© {new Date().getFullYear()} Naty Confeitaria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
