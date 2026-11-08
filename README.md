# Bus-Web

O **Bus-Web** é um protótipo de site sobre mobilidade urbana e sustentabilidade, desenvolvido para a semana Ideathon da FATEC Centro Paula Souza, unidade de Araçatuba. O projeto apresenta o ônibus elétrico como alternativa para o transporte coletivo e explica, de forma simples, como ele funciona e como suas emissões locais se comparam às de um ônibus urbano a diesel.

## O que o site apresenta

- Uma introdução à mobilidade elétrica e ao funcionamento do ônibus a bateria.
- Um diagrama com o fluxo de energia entre bateria, controlador, motor e rodas, incluindo uma explicação sobre frenagem regenerativa.
- Uma galeria de ônibus elétricos em operação, com fotos locais e seus créditos e licenças em [`imagens/galeria/CREDITOS.md`](imagens/galeria/CREDITOS.md).
- Quatro rotas de demonstração em Araçatuba, com pontos de referência, horários e distâncias estimadas.
- Mapas associados aos pontos de referência e links para os detalhes de cada rota.
- Uma comparação estimada de CO₂ no escapamento para ônibus a diesel e elétrico a bateria.
- Um modo de cores pensado para facilitar a distinção de elementos por pessoas com deuteranopia, além de navegação por teclado e links para pular ao conteúdo.

## Sobre os dados das rotas e emissões

Os trajetos, horários e distâncias são **fictícios** e servem apenas para demonstrar o conceito. Não representam linhas nem horários oficiais do transporte público.

O cálculo do diesel usa a referência de **126 kg de CO₂ por 100 km** para um ônibus urbano a diesel indicada no [Radar CNT do Transporte, página 3](https://despoluir.org.br/wp-content/uploads/2025/07/Radar-CNT-do-Transporte-Comparativos-de-emissoes-no-transporte.pdf). Isso equivale a 1,26 kg por quilômetro; o valor mostrado em cada rota é calculado pela distância fictícia de ida e volta. Para o ônibus elétrico, o site apresenta **zero emissão local pelo escapamento** durante a operação, conforme a explicação da [EPE sobre ônibus elétricos](https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/nova-versao-da-ferramenta-para-avaliacao-de-viabilidade-de-onibus-eletrico). A estimativa não inclui a geração da eletricidade nem a fabricação dos veículos.

## Como abrir o projeto

O site é estático e não precisa de instalação de dependências. Como a navegação usa módulos JavaScript, abra-o por um servidor local em vez de usar diretamente o endereço `file://`.

Uma opção é iniciar o servidor na pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000) no navegador. Também é possível usar uma extensão de servidor local no editor de código.

## Estrutura do projeto

```text
index.html              Página inicial
pages/                  Páginas de rotas, mapas, informações e contato
style/                  Folhas de estilo das páginas
scripts/                Navegação e interações do site
imagens/                Imagens, mapas, logotipo e créditos da galeria
banco/                  Arquivos de apoio do projeto
```

O site foi feito com HTML, CSS e JavaScript, sem framework ou backend.

## Apoio no desenvolvimento

O projeto foi idealizado e desenvolvido pela equipe. Em alguns pontos, contamos com o apoio do **Codex (assistente de IA)** para revisar e organizar textos, aprimorar a apresentação das páginas, sugerir ajustes de acessibilidade e documentar as informações do protótipo. As decisões do projeto e a revisão do conteúdo ficaram a cargo da equipe.
