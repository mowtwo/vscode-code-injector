import { statSync, writeFileSync } from 'node:fs'
import type { Disposable } from 'vscode'
import { RelativePattern, window, workspace } from 'vscode'

let watcher: Disposable

export function activate() {
  watcher = workspace.onDidCreateFiles((e) => {
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
  watcher?.dispose()
}
