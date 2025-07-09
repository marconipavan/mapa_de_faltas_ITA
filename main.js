const colunaDisciplinas = 1;
const colunaFaltas = 2;
const colunaJustificadas = 5;
const colunaDiasRestantes = 8;

const mat22 = 2;
const hum70 = 9;

const ss = SpreadsheetApp.getActiveSpreadsheet();
const s = ss.getActiveSheet();

function onEdit(e) {
  const row = e.range.getRow();
  const col = e.range.getColumn();

  if (col === colunaJustificadas) {
    const falta = s.getRange(row, colunaFaltas).getValue();
    const justificada = e.range.getValue();
    if (falta < justificada) {
      SpreadsheetApp.getUi().alert("Justificou mais do que faltou??");
    }
  }

  const intervalo = s.getRange(mat22, colunaDiasRestantes, hum70 - mat22 + 1, 1);
  const valores = intervalo.getValues();
  const novasCores = [];

  for (let i = 0; i < valores.length; i++) {
    if (valores[i][0] <= 0) {
      novasCores.push(["#FF0000"]);
    } else {
      novasCores.push(["white"]);
    }
  }

  intervalo.setBackgrounds(novasCores);
}

function enviarNotificacaoDiaria() {
  const email = Session.getActiveUser().getEmail();
  let dias = s.getRange(mat22 ,colunaDiasRestantes, hum70, colunaDiasRestantes).getValues();
  dias = dias.map(e => e[0]);
  let disciplinas = s.getRange(mat22, colunaDisciplinas, hum70-1, colunaDisciplinas).getValues();
  disciplinas = disciplinas.map(e => e[0]);

  let msg = "Bom dia! Saiba quantos dias você pode coçar!!\n\n";
  for(let i = mat22; i<hum70-1; i++){
    msg+=disciplinas[i].toString() + ": " + dias[i].toString() + "\n";
  }

  MailApp.sendEmail({
    to: email,
    subject: "Dias de faltas restantes",
    body: msg
  });
}