export default function SplitText(text) {
    let receitas = text.split('\n');
    let resultado = []
    for (var i = 0; i < receitas.length; i++) {
        let f = {}
        let word = receitas[i].split(/(\d+)/);
        f.quantidade = word[1];
        f.ingrediente = word[2];
        resultado.push(f);
    }
    return resultado;
}