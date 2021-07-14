# Discord BOT

### **Por onde começo?**

Começa navegando para a  [**Ferramenta de Desenvolvedor do Discord.**](https://discord.com/developers/applications)

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-01-36.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-01-36.png)

Nessa Janela Clica no botão **New Application.**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_18-57-51.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_18-57-51.png)

De o nome para sua aplicação e clique em **Create.**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_18-59-11.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_18-59-11.png)

Feito isso você estará nessa tela.

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-03-30.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-03-30.png)

Nesta tela você deve **salvar o** **CLIENT ID.**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-06-54.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-06-54.png)

Agora navegue para **BOT.**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-08-14.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-08-14.png)

Nesta página clique em **Add Bot.**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-09-13.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-09-13.png)

Confirme a criação do BOT e você estará nessa página.

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-11-18.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-11-18.png)

Nesta página é possível nomear o seu BOT e até mesmo lhe dar uma imagem de perfil.

**Copie o TOKEN.**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-13-24.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-13-24.png)

Role a página para baixo até as permissões aparecerem.

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-14-21.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-14-21.png)

Aqui é um dos pontos onde decidimos qual o grau de permissão do BOT.

Seleciono o grau de permissão do seu BOT e navegue para o **[Permissions Calculator do Discord.](https://discordapi.com/permissions.html)**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-17-41.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-17-41.png)

Marque aqui também as permissões que deu para seu BOT.

Cole no campo **CLIENT ID** o **CLIENT ID** que foi copiado no começo do tutorial.

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-19-27.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-19-27.png)

Feito isso **clique no LINK** que agora está disponível para ser clicado.

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-20-41.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-20-41.png)

Ao clicar, navegará para outra tela, na qual você deve escolher qual **servidor seu inserirá o BOT** e **conceder a Autorização.**

![Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-20-12.png](Discord%20BOT%204ad0fc6f4d9d4e3eb5a498c5b5357b58/Screenshot_from_2021-03-15_19-20-12.png)

Concluindo todos esses tópicos o BOT está quase pronto para ser utilizado no seu servidor do **Discord.**

### E agora para onde vou?

**Agora é HORA DO CÓDIGO.**

Pré requisitos:

-NodeJS

-Um editor de `texto` de sua preferência.

Crie uma pasta onde deseja armazenar o projeto do seu BOT e abra-a com seu editor de texto.

No terminal do editor digite o seguinte comando para iniciar um projeto NodeJS:

```bash
npm init -y
```

Em seguida execute o seguinte comando:

```bash
npm install discord.js
```

e por último mas não menos importante

```bash
npm install dotenv
```

para poder utilizar variáveis de ambiente e no futuro ter uma aplicação mais segura.

Feito isso crie uma arquivo **index.js** na raiz do projeto e dentro dele coloque o seguinte código:

```jsx
require("dotenv/config");
const Discord = require("discord.js");

const bot = new Discord.Client();

const token = process.env.BOT_TOKEN;

bot.login(token);
bot.on("ready", () => {
  console.log("Mestre Saitama Online!");
});
```

Também na raiz do projeto crie um arquivo **.env** e dentro dele coloque o seguinte:

```jsx
BOT_TOKEN=TOKEN
//o TOKEN foi copiado também no decorrer do tutorial,
// ele se encontra perto da foto de perfil do BOT.
//Não deve haver espaço entre os elementos nesse documento.
// Exemplo
//BOT_TOKEN=bxz\jhsbddxajdanajscbaa.ansdji
```

Feito isso o seu BOT está pronto para ser programado por você

Para torna-lo online execute o comando

```bash
node .
```

### Como faço para meu BOT ficar ***ONLINE*** sem estar rodando ele localmente em minha máquina?

- Você deve hospeda-lo igual qualquer outra aplicação *backend*, ocultando seu **TOKEN** pois a posse do **TOKEN** permite a manipulação do BOT.