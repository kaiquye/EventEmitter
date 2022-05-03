# [ EventEmitters - WebSockets ] Trabalhando com padrão orientado a eventos. ✉

### 🥇  Meu resumo.

##### ⌨ O módulo events( eventos ) nos ajuda a trabalhar com emissão de eventos em node.js. Com base nesses eventos podemos usar o padrão Event-Driven ( orientado a eventos ) . 

##### 🖱 Podemos usar esses eventos para notificar algumas partes de nossa aplicação, como : quando o usuário faz o cadastro em nossa aplicação podemos emitir um evento com o EMIT ( emitir um evento para toda a aplicação )  e ficar aguardando o mesmo com o ON ( fica ouvindo o evento ser chamado ) .  Esses dois método são um dos principais do módulo events. .

#### Muitas classes do Node.Js usam em suas bases o módulo events. ( process.stdin.on - process.stdin.emiti.. )

#### Como herdar os métodos do módulo events

##### Para herdar os métodos do módulo  events precisamos usar outro módulo nativo do Node, Util. Com ele podemos usar a events como superClass. 

##### util.inherits ( sua classe, módulo para ser herdado : events )

### 🔮 Livro : Aprendendo Node | Autora : Shelley Powers
