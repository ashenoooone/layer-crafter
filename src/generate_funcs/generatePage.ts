import fs from "fs-extra";
import path from "path";

export function generatePage(baseDir: string, name: string) {
  const targetDir = path.resolve(baseDir, "pages", name);
  fs.ensureDirSync(targetDir);
  const indexPath = path.join(targetDir, "index.ts");
  const componentPath = path.join(targetDir, `ui/${name}.tsx`);
  fs.ensureDirSync(path.dirname(componentPath));

  fs.writeFileSync(indexPath, "");
  fs.writeFileSync(componentPath, "");
  console.log(`✨ Успешно сгенерированно "${name}" в ${targetDir}`);
}
