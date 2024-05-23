import fs from "fs-extra";
import path from "path";

export function generateEntity(baseDir: string, name: string) {
  const targetDir = path.resolve(baseDir, "entities", name);
  fs.ensureDirSync(targetDir);
  const indexPath = path.join(targetDir, "index.ts");
  const componentPath = path.join(targetDir, `ui/${name}.tsx`);
  const modelPath = path.join(targetDir, `model/types.ts`);
  const apiPath = path.join(targetDir, `api`);
  fs.ensureDirSync(path.dirname(componentPath));
  fs.ensureDirSync(path.dirname(modelPath));
  fs.ensureDirSync(path.dirname(apiPath));

  fs.writeFileSync(indexPath, "");
  fs.writeFileSync(componentPath, "");
  console.log(`✨ Успешно сгенерированно "${name}" в ${targetDir}`);
}
