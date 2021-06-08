import readlineSync from "readline-sync";

const questions = ["Add", "List","Check","Remove"];
const todolist = [];

function ToDoList(){
    while(true){
        const index = readlineSync.keyInSelect(questions, "Type your command");
        
        if(index === 0){
            const action = readlineSync.question("What do you want to do?");
            todolist.push(`🔴 ${action}`);
        }

        if(index === 1){
            if(todolist.length < 1) console.log("Empty list");
            else{
                console.log("=============================");
                for (let i = 0; i < todolist.length; i++) {
                    console.log(todolist[i])
                }
                console.log("=============================");
            }
        }

        if(index === 2){
            const selected = readlineSync.keyInSelect(todolist, "What do you want to check/uncheck?");
            if(selected !== -1 && todolist[selected].indexOf('🔴') !== -1) todolist[selected] = todolist[selected].replace('🔴', '🟢')
            else if(selected !== -1) todolist[selected] = todolist[selected].replace('🟢', '🔴');
        }

        if(index === 3){
            const remove = readlineSync.keyInSelect(todolist, "What do you want to remove?");
            todolist.splice(remove, 1);
        }
        
        if(index === -1){
            return
        }
    }
}

ToDoList();