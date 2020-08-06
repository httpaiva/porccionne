export default function Calculo(receitas, quantoRende, quantoVaiRender) {
  const razao = parseInt(quantoVaiRender)/parseInt(quantoRende);
  const receitasCalculadas = receitas.map(receita => {
    const ingrediente = receita.ingrediente;
    const quantidade = receita.quantidade;
    if(quantidade){
      return ({
        ingrediente,
        quantidade: quantidade * razao
      });
    }
    return receita
  });
  return receitasCalculadas;
}