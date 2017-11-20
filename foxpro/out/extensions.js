"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// https://code.visualstudio.com/docs/extensions/example-hello-world
Object.defineProperty(exports, "__esModule", { value: true });
// import * as vscode from 'vscode';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "my-first-extension" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    /*
    var disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);

    error TS2318: Cannot find global type 'Array'.
error TS2318: Cannot find global type 'Boolean'.
error TS2318: Cannot find global type 'Function'.
error TS2318: Cannot find global type 'IArguments'.
error TS2318: Cannot find global type 'Number'.
error TS2318: Cannot find global type 'Object'.
error TS2318: Cannot find global type 'RegExp'.
error TS2318: Cannot find global type 'String'.
    */
}
exports.activate = activate;
//# sourceMappingURL=extensions.js.map