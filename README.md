Este trabalho tem como objetivo a implementação de um front para a api pokedex com React. 
Funcionalidades da aplicação:

1. Tela de login: ​ Uma tela onde o usuário poderá informar um nome de usuário. Caso o
usuário não exista, a API irá registrar um novo e retornar os dados. Se já existir, ela retorna
uma msg dizendo que já existe.

2. Tela inicial: ​ O usuário conseguirá ver todos os pokémons cadastrados na API.

3. Tela de Perfil: ​ O usuário poderá ver seu perfil e todos os pokémons que ele favoritou e
desfavoritar quaisquer pokémon.

4. Tela de perfil do Pokémon: ​ O usuário poderá ver as informações sobre o pokémon e
favoritar ele.

Bibliotecas usadas:
1. axios: ​ Biblioteca usada para fazer requisições para qualquer API;
link: ​ https://github.com/axios/axios
link: ​ https://alligator.io/react/axios-react/
2. reach router: ​ Biblioteca usada para fazer o roteamento da aplicação;
link: ​ https://reach.tech/router

Documentação da Pokédex API
Essa API está disponível em ​ https://pokedex20201.herokuapp.com

1. GET /pokemons
Acesso ao catálogo de pokémons. Essa rota retorna um documento JSON que contém uma lista de
pokŕmons. Um máximo de 25 elementos serão retornados, para continuar com a listagem, acrescente
?page=N​ ao final da rota, substiuindo N pela numeração da próxima página.

2. GET /pokemons/:name
Substitua ​ :name​ pelo identificador de um pokémon específico para receber as informações
do pokémon específico.

3. GET /users/:username
Obtém as informações do usuário ​ :username​ , incluíndo os pokémons favoritos daquele
usuário. Substitua ​ :username ​ pelo nome do usuário.

4. POST /users
Registra um novo usuário no sistema. Deverá ser enviado um username para o usuário a
ser registrado.

5. POST /users/:username/starred/:pokemon
Acrescenta pokémon à lista de favoritos de ​ :username
6. DELETE /users/:username/starred/:pokemon
Remove ​ :pokemon​ da lista de favoritos de ​ :username

Links que podem ser usados como referência:
1. https://pokedex.org/
2. https://www.pokemon.com/br/pokedex/
3. https://dieg0d.github.io/links.github.io
