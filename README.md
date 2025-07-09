# Mapa de faltas ITA

Automação de google sheets para controle de faltas ITA 2 semestre 2025

## Como utilizar:

1. Faça o download da planilha presente neste repositório.
2. Acesse, no seu navegador, o Google Sheets. (esteja logado na mesma conta que o gmail do seu celular).
3. Importe a planilha baixada no Google Sheets.
4. Clique em *Extensões* na barra de ferramentas e depois em *Apps Script*.
5. Aparecerá uma aba com uma região para escrever um código em *javascript*. Substitua esse código pelo conteúdo do arquivo *main.js* deste repositório.
6. Clique em *Triggers* (ou *Acionadores*) localizado no canto esquerdo da tela e com o símbolo de um relógio.
7. Clique em *Adicionar acionador*, um botão azul localizado no canto inferior direito da tela.
8. Em *Escolha a função a executar*, selecione *enviarNotificacaoDiaria*.
9. Em *Selecione a origem do evento*, selecione *Controlado por relógio*.
10. Em *Selecione o tipo de acionador baseado na hora*, selecione *Temporizador de dias*.
11. Em *Selecione a hora do dia*, escolha o horário mais conveniente para o seu caso.
12. Clique em guardar.

    OBS: é provável que apareça uma notificação informando que é perigoso, ou algo do tipo. Isso se deve ao fato de que o programa precisa de acesso à planilhas e ao envio de emails para funcionar. Como a conta associada a isso é a sua própria, não há problemas em aceitar esses termos.

É extremamente encorajado o uso livre deste código. Adapte-o ao seu contexto!!

Faça bom uso :)
