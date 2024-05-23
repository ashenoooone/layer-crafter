import fs from "fs-extra";
import path from "path";

export function generateFeature(baseDir: string, name: string) {
  const targetDir = path.resolve(baseDir, "features", name);
  fs.ensureDirSync(targetDir);
  const indexPath = path.join(targetDir, "index.ts");
  const componentPath = path.join(targetDir, `ui/${name}.tsx`);
  const modelPath = path.join(targetDir, `model/types.ts`);
  const apiPath = path.join(targetDir, `api/api.ts`);
  fs.ensureDirSync(path.dirname(componentPath));
  fs.ensureDirSync(path.dirname(modelPath));
  fs.ensureDirSync(path.dirname(apiPath));

  fs.writeFileSync(indexPath, "");
  fs.writeFileSync(componentPath, "");
  fs.writeFileSync(modelPath, "");
  fs.writeFileSync(apiPath, "");
  console.log(`✨ Успешно сгенерированно "${name}" в ${targetDir}`);
}
