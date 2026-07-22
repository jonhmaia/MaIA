const faqs = [
  {
    q: "Que tipos de projeto a MaIA desenvolve?",
    a: "Sites, sistemas sob medida, agentes de IA, automação de processos e refatoração de sistemas — da primeira versão ao produto em evolução contínua.",
  },
  {
    q: "Vocês trabalham com uma ideia ainda não validada?",
    a: "Sim. Começamos pelo diagnóstico para esclarecer o problema, o público e o menor caminho até uma versão útil em operação.",
  },
  {
    q: "Quanto tempo leva um projeto?",
    a: "Depende do escopo. Projetos focados podem sair em semanas; sistemas maiores seguem ciclos curtos com entregas progressivas e previsíveis.",
  },
  {
    q: "Como o orçamento é definido?",
    a: "A partir do diagnóstico: alinhamos objetivo, complexidade e prioridades. Você recebe uma proposta clara antes de qualquer desenvolvimento.",
  },
  {
    q: "Posso contratar apenas uma primeira versão?",
    a: "Pode. Muitos projetos começam com um MVP ou primeira versão operacional e evoluem conforme o uso real.",
  },
  {
    q: "A MaIA assume projetos já existentes?",
    a: "Sim. Avaliamos o código, a arquitetura e os riscos, e propomos um plano de correção, evolução ou reconstrução parcial.",
  },
  {
    q: "Existe suporte depois da entrega?",
    a: "Sim. Acompanhamos o lançamento, estabilizamos o que for necessário e seguimos com melhorias quando fizer sentido para o negócio.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="faqList">
      {faqs.map((item) => (
        <details key={item.q} className="faqItem">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
