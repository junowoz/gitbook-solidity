module.exports = [
  "",
  {
    title: "Apostila Completa",
    path: "/apostila/",
    collapsable: true,
    children: [
      "/apostila/estrutura-de-contratos-inteligentes",
      "/apostila/tipos-de-variaveis",
      "/apostila/funcoes.md",
      "/apostila/modificadores-de-funcoes-view-pure-constant.md",
      "/apostila/visibilidade-de-funcoes-external-public-internal-and-private.md",
      "/apostila/visibilidade-de-variaveis-external-public-internal-and-private.md",
      "/apostila/variaveis-built-in-msg.sender-msg.value....md",
      "/apostila/arrays-listas.md",
      "/apostila/controladores-de-fluxo-if-for-while.md",
      "/apostila/mappings-dicionarios.md",
      "/apostila/11.-struct.md",
      "/apostila/12.-enums.md",
      "/apostila/13.-memory-vs-storage.md",
      "/apostila/14.-eventos.md",
      "/apostila/14.-interagindo-com-outro-contrato.md",
      "/apostila/18.-modificadores.md",
      "/apostila/15.-constructor.md",
      "/apostila/15.-funcoes-pagaveis-function-payable.md",
      "/apostila/16.-criando-contratos-a-partir-de-um-contrato..md",
      "/apostila/17.-erros.md",

      {
        title: "Extra (avançado)",
        path: "/apostila/extra-avancado/",
        children: [
          "/apostila/extra-avancado/19.-fallback-functions.md",
          "/apostila/extra-avancado/20.-assembly.md",
          "/apostila/extra-avancado/21.-bibliotecas-librarys.md",
          "/apostila/extra-avancado/24.-heranca.md",
        ],
      },
    ],
  },
  {
    title: "Exemplos",
    path: "/exemplos/",
    collapsable: true,
    children: [
      "/exemplos/",
      {
        title: "Linguagem (v0.8.3)",
        path: "/exemplos/linguagem-v0.8.3/",
        children: [
          "/exemplos/linguagem-v0.8.3/",
          "/exemplos/linguagem-v0.8.3/ola-mundo.md",
          "/exemplos/linguagem-v0.8.3/primeira-aplicacao.md",
          "/exemplos/linguagem-v0.8.3/tipos-de-dados-primarios.md",
          "/exemplos/linguagem-v0.8.3/variaveis.md",
          "/exemplos/linguagem-v0.8.3/constantes.md",
          "/exemplos/linguagem-v0.8.3/imutaveis.md",
          "/exemplos/linguagem-v0.8.3/lendo-e-escrevendo-para-uma-variavel-de-estado.md",
          "/exemplos/linguagem-v0.8.3/ether-e-wei.md",
          "/exemplos/linguagem-v0.8.3/gas.md",
          "/exemplos/linguagem-v0.8.3/if-else.md",
          "/exemplos/linguagem-v0.8.3/for-e-while-loop.md",
          "/exemplos/linguagem-v0.8.3/mapping.md",
          "/exemplos/linguagem-v0.8.3/matriz.md",
          "/exemplos/linguagem-v0.8.3/enum.md",
          "/exemplos/linguagem-v0.8.3/structs.md",
          "/exemplos/linguagem-v0.8.3/localizacoes-de-dados-armazenamento-memoria-e-calldata.md",
          "/exemplos/linguagem-v0.8.3/funcao.md",
          "/exemplos/linguagem-v0.8.3/funcoes-view-e-pure.md",
          "/exemplos/linguagem-v0.8.3/erro.md",
          "/exemplos/linguagem-v0.8.3/modificador-de-funcao.md",
          "/exemplos/linguagem-v0.8.3/eventos.md",
          "/exemplos/linguagem-v0.8.3/constructor.md",
          "/exemplos/linguagem-v0.8.3/heranca.md",
          "/exemplos/linguagem-v0.8.3/sombreamento-de-variaveis-de-estado-herdadas.md",
          "/exemplos/linguagem-v0.8.3/chamando-contratos-de-classe-pai.md",
          "/exemplos/linguagem-v0.8.3/visibilidade.md",
          "/exemplos/linguagem-v0.8.3/interface.md",
          "/exemplos/linguagem-v0.8.3/pagavel.md",
          "/exemplos/linguagem-v0.8.3/enviando-ether-transferir-enviar-chamar.md",
          "/exemplos/linguagem-v0.8.3/fallback.md",
          "/exemplos/linguagem-v0.8.3/call.md",
          "/exemplos/linguagem-v0.8.3/delegatecall.md",
          "/exemplos/linguagem-v0.8.3/seletor-de-funcao.md",
          "/exemplos/linguagem-v0.8.3/chamando-outro-contrato.md",
          "/exemplos/linguagem-v0.8.3/contrato-que-cria-outros-contratos.md",
          "/exemplos/linguagem-v0.8.3/try-catch.md",
          "/exemplos/linguagem-v0.8.3/import.md",
          "/exemplos/linguagem-v0.8.3/biblioteca.md",
          "/exemplos/linguagem-v0.8.3/hashing-with-keccak256.md",
          "/exemplos/linguagem-v0.8.3/verificando-assinatura.md"
        ],
      },
      {
        title: "Aplicações",
        path: "/exemplos/aplicacoes/",
        children: [
          "/exemplos/aplicacoes/carteira-multi-assinaturas.md",
          "/exemplos/aplicacoes/arvore-de-merkle.md",
          "/exemplos/aplicacoes/mapping-iteravel",
          "/exemplos/aplicacoes/erc20.md",
          "/exemplos/aplicacoes/endereco-de-contrato-pre-computado-com-create2.md",
          "/exemplos/aplicacoes/contrato-proxy-minimo.md",
          "/exemplos/aplicacoes/implante-qualquer-contrato.md",
          "/exemplos/aplicacoes/canal-de-pagamento-unidirecional.md",
          "/exemplos/aplicacoes/canal-de-pagamento-bidirecional.md",
          "/exemplos/aplicacoes/leilao-ingles.md",
          "/exemplos/aplicacoes/leilao-holandes.md",
        ],
      },
      {
        title: "Hacks",
        path: "/exemplos/hacks/",
        children: [
          "/exemplos/hacks/",
          "/exemplos/hacks/reentrada.md",
          "/exemplos/hacks/overflow-e-underflow-aritmeticos.md",
          "/exemplos/hacks/autodestruicao.md",
          "/exemplos/hacks/acessando-dados-privados.md",
          "/exemplos/hacks/delegatecall.md",
          "/exemplos/hacks/fonte-de-aleatoriedade.md",
          "/exemplos/hacks/recusa-de-servico.md",
          "/exemplos/hacks/phishing-com-tx.origin.md",
          "/exemplos/hacks/escondendo-codigos-maliciosos-com-contrato-externo.md",
          "/exemplos/hacks/honeypot.md",
          "/exemplos/hacks/front-running.md",
          "/exemplos/hacks/manipulacao-do-bloco-timestamp.md",
          "/exemplos/hacks/repeticao-de-assinatura.md",
          "/exemplos/hacks/ignorar-a-verificacao-do-tamanho-do-contrato.md",
        ],
      },
      {
        title: "DeFi",
        path: "/exemplos/defi/",
        children: [
          "/exemplos/defi/",
          "/exemplos/defi/exemplos-de-uniswap-v2.md",
          "/exemplos/defi/oraculo-de-preco-da-chainlink.md",
          "/exemplos/defi/recompensas-de-aposta.md",
        ],
      },
    ],
  },
  {
    title: "EVM Máquina Virtual Ethereum",
    path: "/evm-maquina-virtual-ethereum/",
    children: [
      "/evm-maquina-virtual-ethereum/accounts.md",
      "/evm-maquina-virtual-ethereum/transactions.md",
      "/evm-maquina-virtual-ethereum/gas-taxas.md",
      "/evm-maquina-virtual-ethereum/op_codes.md",
      "/evm-maquina-virtual-ethereum/bytecodes.md",
      {
        title: "Patterns and Standards",
        path: "/evm-maquina-virtual-ethereum/patterns-and-standards",
        children: ["/evm-maquina-virtual-ethereum/patterns-and-standards/erc20-and-eip-20.md"],
      },
    ],
  },
  {
    title: "Segurança",
    path: "/seguranca/",
    children: [
      {
        title: "Vulnerabilidades Conhecidas",
        path: "/seguranca/vulnerabilidades-conhecidas/",
        children: [
          "/seguranca/vulnerabilidades-conhecidas/funcao-de-re-entrada-reetrancy.md",
          "/seguranca/vulnerabilidades-conhecidas/overflow-e-underflow-aritmetico.md",
        ],
      },
    ],
  },
]
