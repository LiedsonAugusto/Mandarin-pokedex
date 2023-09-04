# Mandarin pokedex.

Este é um repositório dedicado ao último estágio do processo seletivo do programa MandaBem! <br>
O teste se baseia no consumo da API Pokémon, baseada na [PokéAPI](https://pokeapi.co/) , e apresentá-la de maneira criativa.

Diante isso, pensei em criar uma PokéDex que consome os dados devolvidos pela a API e apresenta na tela.
#
# Tecnologias.

Tive a liberdade de escolher a tecnologia que me sentia mais a vontade para desenvolver <br>
Portando, utilizei as que possuía uma maior afinidade para maior agilidade e performance. <br>

Segue abaixo uma tabela com as principais tecnologias utilizadas:


| REACTJS | JAVASCRIPT |  BOOTSTRAP | CSS |  HTML |
|-------------| ------------|  ------------|  ------------|  ------------|
|<img width="45px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />|<img width="45px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />|<img width="45px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />|<img width="45px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />|<img width="45px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />|

Além disso, outras dependências foram utilizadas para a construção da página, como:

- React Icons -> Utilizar ícones prontos, visando um melhor design.
- Axios -> Biblioteca open source com o objetivo de realizar requisições HTTP. 

# Requisitos.
- [x] Requisição de todos os pokémons.
- [x] Criatividade em relação da estilização
# Opcionais.
- [x] Requisição de um pokémon em específico utlizando o parâmetro name. <br>
# Como foi feito.
Quando a página for inicializada, ela fará uso da API para requisitar os dados de todos os pokémons.

Quando a resposta para a requisição estiver pronta, será retornado todos os pokémons em um objeto e apresentarei na tela o primeiro pokémon contido no objeto. 
Entretanto, para não ficar sendo feita uma requisição a cada momento em que o usuário desejar trocar de pokémon na tela, utilizei da estratégia de guardar os dados de todos os pokémons no **_SessionStorage_**. 
Dessa forma, mantenho os dados em cache no momento em que a página for aberta, pego os dados no SessionStorage quando necessitar, e quando a página for fechada, os dados serão apagados do **_SessionStorage_**. 
Assim, utilizo de uma boa prática de programação e não preciso ficar requisitando toda vez que um novo pokémon aparecer na tela. <br>

Entretanto, para a busca por nome de um pokémon, optei por realizar a requisição toda vez que essa funcionalidade for usada, para que, dessa maneira, eu possa mostra que possuo entendimento tanto de realizar requisições HTTP, quanto de buscar informações do cache.

# Como ver o resultado.

Caso deseja ver o resultado deste teste, é necessário que você tenha o [Node](https://nodejs.org/en/download) instalado em seu computador. <br>
Após a instalação, siga os seguintes passos:

Primeiro é necessário clonar esse repositório para dentro de sua máquina. <br>
Você fazer isso com o seguinte comando: 
```bash
git clone https://github.com/LiedsonAugusto/Mandarin-pokedex.git
```

Após esse comando, entre no repositório clonado para as seguintes etapas.

Quando estiver dentro, é necessário instalar as dependências do projeto, utilize o comando abaixo para realizar essa ação:
```bash
npm install
```
Feito isso, abra um servidor localhost e acesse a página pelo navegador, utilize este comando:
```bash
npm run dev
```

Pronto! Feito isso é apenas necessário entrar em seu navegador em _localhost:5173_ (porta padrão do react) e ver o resultado, espero que goste!
