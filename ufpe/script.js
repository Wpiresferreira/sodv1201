let data = [
    {
        Ciclo: "Geral",
        Codigo: "MA026",
        Disciplinas: "Cálculo Diferencial e Integral 1",
        Periodo: "1º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Geral",
        Codigo: "IF165",
        Disciplinas: "Computação Eletrônica",
        Periodo: "1º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Geral",
        Codigo: "FI006",
        Disciplinas: "Física Geral 1",
        Periodo: "1º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Geral",
        Codigo: "MA036",
        Disciplinas: "Geometria Analítica 1",
        Periodo: "1º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Geral",
        Codigo: "EG468",
        Disciplinas: "Geometria Gráfica Tridimensional",
        Periodo: "1º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Geral",
        Codigo: "MA046",
        Disciplinas: "Álgebra Linear 1 ",
        Periodo: "2º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "MA036"
    },
    {
        Ciclo: "Geral",
        Codigo: "MA027",
        Disciplinas: "Cálculo Diferencial e Integral 2",
        Periodo: "2º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "MA026"
    },
    {
        Ciclo: "Geral",
        Codigo: "FI007",
        Disciplinas: "Física Geral 2",
        Periodo: "2º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "FI006"
    },
    {
        Ciclo: "Geral",
        Codigo: "ET317",
        Disciplinas: "Probabilidade Estatística",
        Periodo: "2º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "MA026"
    },
    {
        Ciclo: "Geral",
        Codigo: "QF001",
        Disciplinas: "Química Geral 1",
        Periodo: "2º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Geral",
        Codigo: "MA128",
        Disciplinas: "Cálculo Diferencial e Integral 3",
        Periodo: "3º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "MA027",
        PRE2: "MA036"
    },
    {
        Ciclo: "Geral",
        Codigo: "IF215",
        Disciplinas: "Cálculo Numérico",
        Periodo: "3º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "IF165",
        PRE2: "MA027"
    },
    {
        Ciclo: "Geral",
        Codigo: "FI108",
        Disciplinas: "Física Geral 3",
        Periodo: "3º período",
        CHTotal: "60",
        OBR: "1",
        COREQ1: "MA128",
        PRE1: "FI007"
    },
    {
        Ciclo: "Geral",
        Codigo: "CI106",
        Disciplinas: "Mecânica Geral 1",
        Periodo: "3º período",
        CHTotal: "60",
        OBR: "1",
        COREQ1: "MA128",
        PRE1: "FI006"
    },
    {
        Ciclo: "Geral",
        Codigo: "MA129",
        Disciplinas: "Cálculo Diferencial e Integral 4",
        Periodo: "4º período",
        CHTotal: "60",
        OBR: "1",
        PRE2: "MA128"
    },
    {
        Ciclo: "Geral",
        Codigo: "ME262",
        Disciplinas: "Mecânica dos Fluidos 2",
        Periodo: "4º período",
        CHTotal: "60",
        OBR: "1",
        COREQ1: "-"
    },
    {
        Ciclo: "Geral",
        Codigo: "CI218",
        Disciplinas: "Resistência dos Materiais 1A",
        Periodo: "4º período",
        CHTotal: "60",
        OBR: "1",
        COREQ1: "MA129",
        PRE1: "CI106"
    },
    {
        Ciclo: "Geral",
        Codigo: "EL246",
        Disciplinas: "Eletrotécnica Geral",
        Periodo: "6º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "FI108"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP001",
        Disciplinas: "Introdução à Engenharia de Produção",
        Periodo: "1º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Profissional",
        Codigo: "CS100",
        Disciplinas: "Sociologia e Meio Ambiente",
        Periodo: "1º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "-"
    },
    {
        Ciclo: "Profissional",
        Codigo: "CI100",
        Disciplinas: "Ecologia e Controle da Poluição",
        Periodo: "2º período",
        CHTotal: "30",
        OBR: "1",
        COREQ2: "CS100"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP017",
        Disciplinas: "Pesquisa Operacional 1",
        Periodo: "2º período",
        CHTotal: "60",
        OBR: "1",
        COREQ1: "MA046",
        PRE1: "MA026"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP003",
        Disciplinas: "Administração para Engenharia",
        Periodo: "3º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "EP001"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP113",
        Disciplinas: "Fundamentos de Algoritmos para Otimização",
        Periodo: "3º período",
        CHTotal: "30",
        OBR: "1",
        COREQ1: "EP114",
        COREQ2: "IF215",
        PRE1: "EP017"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP111",
        Disciplinas: "Métodos de Apoio a Decisão",
        Periodo: "3º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "EP017"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP114",
        Disciplinas: "Otimização Combinatória",
        Periodo: "3º período",
        CHTotal: "30",
        OBR: "1",
        COREQ1: "EP113",
        PRE1: "EP017"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP005",
        Disciplinas: "Gestão da Produção 1",
        Periodo: "4º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "EP001",
        PRE2: "ET317"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP115",
        Disciplinas: "Inferência Estatística",
        Periodo: "4º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "ET317"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP073",
        Disciplinas: "Pesquisa Operacional 2",
        Periodo: "4º período",
        CHTotal: "60",
        OBR: "1",
        COREQ1: "IF215",
        PRE1: "EP017",
        PRE2: "ET317"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP004",
        Disciplinas: "Teoria do Trabalho",
        Periodo: "4º período",
        CHTotal: "30",
        OBR: "1",
        COREQ1: "EP003"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP012",
        Disciplinas: "Controle Estatístico de Qualidade",
        Periodo: "5º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "ET317"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP127",
        Disciplinas: "Custos de Produção",
        Periodo: "5º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "EP005"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP007",
        Disciplinas: "Engenharia Econômica e Financeira",
        Periodo: "5º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "MA026"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP125",
        Disciplinas: "Gestão de Produção 2",
        Periodo: "5º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "EP005"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP126",
        Disciplinas: "Processos Industriais 1",
        Periodo: "5º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP005",
        PRE2: "FI007",
        PRE3: "QF001"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP119",
        Disciplinas: "Engenharia de Segurança do Trabalho",
        Periodo: "6º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "FI007",
        PRE2: "QF001"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP009",
        Disciplinas: "Gestão da Qualidade",
        Periodo: "6º período",
        CHTotal: "60",
        OBR: "1",
        COREQ1: "EP012",
        PRE1: "EP005"
    },
    {
        Ciclo: "Profissional",
        Codigo: "CI302",
        Disciplinas: "Materiais de Construção Civil 1 A",
        Periodo: "6º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "CI218"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP120",
        Disciplinas: "Processos Industriais 2",
        Periodo: "6º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP017",
        PRE2: "EP126",
        PRE3: "MA129"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP121",
        Disciplinas: "Engenharia de Métodos",
        Periodo: "7º período",
        CHTotal: "60",
        OBR: "1",
        PRE1: "EP005",
        PRE2: "ET317"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP019",
        Disciplinas: "Processos Industriais 3",
        Periodo: "7º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP120"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP020",
        Disciplinas: "Processos Industriais 4",
        Periodo: "8º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP019"
    },
    {   
        Ciclo: "Profissional",
        Codigo: "EP022",
        Disciplinas: "Estágio Obrigatório",
        Periodo: "9º período",
        CHTotal: "270",
        OBR: "1",
        PRE1: "EP020",
        PRECH: "2940"
    },
    {        Ciclo: "Profissional",
        Codigo: "EP116",
        Disciplinas: "Metodologia de Projeto Final 1",
        Periodo: "9º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP020",
        PRE2: "EP117",
        PRECH: "2940"
    },
    {        Ciclo: "Profissional",
        Codigo: "EP117",
        Disciplinas: "Metodologia de Projeto Final 2",
        Periodo: "9º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP020",
        PRE2: "EP116",
        PRECH: "2940"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP118",
        Disciplinas: "Práticas em sistemas produtivos",
        Periodo: "9º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP020",
        PRECH: "2940"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP107",
        Disciplinas: "Avanços em sistemas produtivos",
        Periodo: "10º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP116 ",
        PRE2: "EP117",
        PRE3: "EP118",
        PRECH: "2940"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP110",
        Disciplinas: "Estudos de Casos em Sistemas de Produção",
        Periodo: "10º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP116 ",
        PRE2: "EP117",
        PRE3: "EP118",
        PRECH: "2940"
    },
    {
        Ciclo: "Profissional",
        Codigo: "EP021",
        Disciplinas: "Projeto Final de Curso",
        Periodo: "10º período",
        CHTotal: "30",
        OBR: "1",
        PRE1: "EP116 ",
        PRE2: "EP117",
        PRE3: "EP118",
        PRECH: "2940"
    }
]

console.log(data);

var terms = ["1º período","2º período","3º período","4º período","5º período","6º período","7º período","8º período","9º período","10º período"];


for (let i = 0; i< terms.length; i++){

    gradeElement = document.getElementById("grade")

    termElement = document.createElement("div")
    termElement.innerText = terms[i]
    termElement.id = "term" + i
    termElement.className = "term"

    gradeElement.appendChild(termElement)

}

for (let i = 0; i< data.length; i++){

    let box = document.createElement("div")
    box.className = "box"
    box.id = data[i].Codigo
    box.addEventListener("mouseover", checkPre)
    box.addEventListener("mouseout", clean)
    
    selectedTerm = data[i].Periodo.substring(0, data[i].Periodo.indexOf("º"))-1
    let disciplina = document.createElement("div")
    disciplina.innerText = data[i].Codigo
    disciplina.className = "disciplina"
    
    let description = document.createElement("div")
    description.innerText = data[i].Disciplinas
    description.className = "description"
    
    parenteElement = document.getElementById("term" + selectedTerm)

    parenteElement.appendChild(box)
    box.appendChild(disciplina)
    box.appendChild(description)

}

function checkPre(){
    console.log(this.id);
    let obj = data.find(({Codigo}) => Codigo === this.id);
    
    console.log(obj);
    console.log(obj.PRE1);
    $("#"+obj.PRE1).addClass("pre")
    $("#"+obj.PRE2).addClass("pre")
    $("#"+obj.PRE3).addClass("pre")
    $("#"+obj.COREQ1).addClass("co")
    $("#"+obj.COREQ2).addClass("co")
}

function clean(){
    for(let i=0; i<data.length; i++){
        $("#"+data[i].Codigo).removeClass("co")
        $("#"+data[i].Codigo).removeClass("pre")

    }
}

console.log(terms)