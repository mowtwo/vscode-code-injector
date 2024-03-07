import { statSync, writeFileSync } from 'node:fs'
import { RelativePattern, window, workspace } from 'vscode'

export function activate() {
  // const folders = workspace.workspaceFolders ?? []

  workspace.onDidCreateFiles((e) => {
    for (const file of e.files) {
      if (statSync(file.fsPath)?.isFile?.() && file.fsPath.endsWith('.js')) {
        writeFileSync(
          file.fsPath,
          '// create by mowtwo',
          { encoding: 'utf-8' },
        )
      }
    }
  })
}

export function deactivate() {

}
