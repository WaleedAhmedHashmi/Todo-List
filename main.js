#! /usr/bin/env node
import inquirer from "inquirer";
let list = [];
let condition = true;
while (condition) {
    let todo_list = await inquirer.prompt([
        {
            name: "firstQ",
            type: "input",
            message: "What do you like to add in list ",
        },
        {
            name: "secondQ",
            type: "confirm",
            message: "Would you like to add more list",
            default: "true"
        }
    ]);
    list.push(todo_list.firstQ);
    console.log(list);
    condition = todo_list.secondQ;
}
