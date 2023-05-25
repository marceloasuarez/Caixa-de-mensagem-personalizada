import {Cxmsg} from "./cxmsg.js" // p q la caixa de manesagem esta siendo exportada

const config={ 
//titulo: "CFB Cursos",
//texto:"Curso de Javascript",
cor: "#48f",
tipo:"ok",
textos:["SIM","NAO"],
comando_sn:()=>{}
}
//Cxmsg.config(config)
//const cxmsg=new Cxmsg(config)

const fsim=()=>{
	console.log("Botao SIM pressionado")
}

const btn_mostarcxmsg=document.querySelector("#btn_mostarcxmsg")
const btn_mostarcxmsg2=document.querySelector("#btn_mostarcxmsg2")
const btn_mostarcxmsg3=document.querySelector("#btn_mostarcxmsg3")


btn_mostarcxmsg.addEventListener("click", ()=>{
//cxmsg.mostrar("CFB Cursos","Curso de Javasvript")
config.tipo="ok"
Cxmsg.mostrar(config,"Curso","Javasvript") //p q ahora llamamos a la Clase
})

btn_mostarcxmsg2.addEventListener("click", ()=>{
//cxmsg.mostrar("Youtube","Canal com cursos")
config.tipo="sn"
config.comando_sn=()=>{fsim()}
Cxmsg.mostrar(config,"Youtube","Canal")
})

btn_mostarcxmsg3.addEventListener("click", ()=>{
//cxmsg.mostrar("Javascript","Aula 137")
config.tipo="sn"
config.textos=["OK","CANCELA"]
config.comando_sn=()=>{}
Cxmsg.mostrar(config,"Javascript","Aula 137")
})