import fs from "fs-extra";
import path from "path";

/**
 * Генерирует shared layer.
 * @param baseDir - Корневая директория проекта.
 * @param name - Имя компонента.
 */
export function generateShared(baseDir: string, name: string) {
  const targetDir = path.resolve(baseDir, "shared", "ui", name);
  fs.ensureDirSync(targetDir);
  const indexPath = path.join(targetDir, "index.ts");
  const componentPath = path.join(targetDir, `ui/${name}.tsx`);
  fs.ensureDirSync(path.dirname(componentPath));

  fs.writeFileSync(indexPath, "");
  fs.writeFileSync(componentPath, "");
  console.log(`✨ Генерируем общий компонент "${name}" в ${targetDir}`);
}
