#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let condition: boolean = true;


while (condition) {
    let addTask = await inquirer.prompt(
        [
            {
                message: "what do you want to add in todo",
                name: "todo1",
                type: "input"
            },
            {
                message: "Do you want to add more?",
                name: "addMore",
                type: "confirm",
                default: "false"
            }
        ]
    );
    todos.push(addTask.todo1);
    condition = addTask.addMore;
    console.log(todos);
};

