
let test = document.querySelector("div#test")
let nome = '' 
nome = document.querySelector("Input#nome")
let periodoAT = -1
let curso = document.querySelector("input#curso")
do{
    periodoAT = document.querySelector("input#periodo") 
    if(periodoAT>8){
        window.alert("Período inexistente")
    }
}while(periodoAT>8)


let periodo = 180
let totalcurso= periodo*8
let tempoR = (totalcurso-periodoAT)/360

//Criar uma matriz 8x7 para armazenar as máterias, sendo uma linha para cada périodo
Periodo1 = ["Construção de algoritmo", "Fundamentos matemáticos", "Laboratório de programação", "Introdução a ciência da computação", "Física aplicada a à ciência da computação", "Álgebra linear"]
Periodo2 = ["Cálculo I", "Banco de dados I", "Introdução a sistemas digitais", "Analise e projeto de software", "Programação orientado a objeto", "Estrutura de dados I"]
Periodo3 = ["Arquitetura e organização de computadores", "Estrutura de dados II", "Programação web", "Interação Homem-máquina", "Metodologia e Pesquisa ciêntifica", "Engenharia de software", "Cálculo II"]
Periodo4 = ["Ética, computadores e sóciedades", "Matemática computacional", "Arquitetura e organização de computadores II", "Redes de computadores", "Paradigmas de programação", "Lógica e matemática discreta"]
Periodo5 = ["Probabilidade e estátistica", "Teoria dos grafos", "Processamento digital de imagens", "Programação para dispositivos móveis", "Sistemas operacionais", "Libras", "Filosofia da educação", "Noções de administração e contabilidade", "Sociologia da educação", "Empreendedorismo", "Tecnologias da educação", "Matemática financeira"]
Periodo6 = ["Marketing", "Gestão de pessoas", "Planejamento e controle financeiro", "Didática", "Computação gráfica", "Otimização de sistemas", "Cálculo numérico", "Cálculo III", "Teoria da computação", "Inteligencia artificial", "Projeto avançado de algoritmos"]
Periodo7 = ["Grámaticas e compiladores", "Educação das relações étnico-raciais e afrodescendencia", "Mineração de dados", "Trabalho de conclusão de curso I", "Banco de dados II"]
Periodo8 = ["Sistemas distribuidos", "Trabalho de conclusão de curso II", "Tópicos especiais em computação I", "Tópicos especiais em computação II"]
computacao = [Periodo1, Periodo2, Periodo3, Periodo4, Periodo5, Periodo6, Periodo7, Periodo8]


window.alert(computacao[0][2])

function redirectmatat(){
    window.location.href="matat.html"; 
}
function redirectconfig(){
    window.location.href="config.html"
    /*if( periodoAT===-1 || nome===''){
        window.location.href="config.html"
    }else{
        window.location.href="#"
    }*/
   
}
function redirectmain(){
    window.location.href="index.html"
    //test.innerHTML = `Olá ${nome}, que está no ${periodoAT} periodo`
}
test.innerHTML = `Olá ${nome}, que está no ${periodoAT} periodo`