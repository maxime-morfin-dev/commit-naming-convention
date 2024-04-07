// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('commit-naming-convention.formatCommitMessage', () => {
		vscode.window.showInputBox({ prompt: 'Entrez votre message de commit' }).then(message => {
				if (message) {
						const formattedMessage = formatCommitMessage(message);
						vscode.env.clipboard.writeText(formattedMessage); // Copie le message formaté dans le presse-papiers
						vscode.window.showInformationMessage('Message de commit formaté copié dans le presse-papiers.');
				}
		});
});

function formatCommitMessage(message: string): string {
	return `feat : ${message}`;
}

context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
