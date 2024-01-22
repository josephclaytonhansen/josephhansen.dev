import fs from "fs-extra"
import { exec } from "child_process"
import { promisify } from "util"

const execPromise = promisify(exec)

async function run() {
  try {
    await fs.copy("dist/", "../built-josephhansen-dev/built-josephhansen-dev")

    process.chdir("../built-josephhansen-dev")

    await execPromise("git add .")
    await execPromise('git commit -m "Update build"')
    await execPromise("git push")
  } catch (err) {
    console.error(err)
  }
}

run()
