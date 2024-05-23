import fs from "fs-extra";
import path from "path";
import utils from "./utils";
import { generateShared } from "./generate_funcs/generateShared";
import { generateFeature } from "./generate_funcs/generateFeature";
import { generateEntity } from "./generate_funcs/generateEntity";
import { generateWidget } from "./generate_funcs/generateWidget";
import { generatePage } from "./generate_funcs/generatePage";

/**
 * Генерирует слой по указанному типу и имени.
 * @param type - Тип слоя ('shared/ui' - общий компонент).
 * @param name - Имя слоя.
 * @param casing - Тип кастинга имени слоя. По умолчанию 'pascal'.
 */
function generate(type: Layers, name: string, options: Options) {
  const convertedName = utils.convertToCase(name, options.casing);
  const baseDir = path.resolve(process.cwd(), "src");
  if (!fs.existsSync(baseDir)) {
    console.error("Ошибка: директория src не существует.");
    process.exit(1);
  }
  if (type === "shared/ui") {
    generateShared(baseDir, convertedName);
  } else if (type === "feature") {
    generateFeature(baseDir, convertedName);
  } else if (type === "entity") {
    generateEntity(baseDir, convertedName);
  } else if (type === "widget") {
    generateWidget(baseDir, convertedName);
  } else if (type === "page") {
    generatePage(baseDir, convertedName);
  }
}

export default generate;
