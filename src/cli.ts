#!/usr/bin/env node
import { Argument, program, Option } from "commander";
import generate from "./index";

/**
 * 🎨 Layer Crafter CLI
 *
 * 🛠️ This CLI tool generates layers following the Feature-Sliced Design (FSD) methodology.
 *
 * 📌 Command: generate <type> <name>
 *
 * Parameters:
 *  - type: The type of layer to generate (e.g., 'page', 'component').
 *  - name: The name of the layer.
 *  - case: Casing type (e.g., 'pascal', 'snake', 'kebab').
 *
 * Example:
 *  npx crafter generate page start-page
 *
 * This will generate a new layer in the specified type's directory with the given name.
 */

program
  .command("generate")
  .addArgument(
    new Argument(
      "type",
      "The type of layer to generate (e.g., 'page' | 'widget' | 'feature' | 'entity' | 'shared/ui')"
    )
      .choices(["page", "widget", "feature", "entity", "shared/ui"])
      .argRequired()
  )
  .addArgument(new Argument("name", "The name of the layer").argRequired())
  .addOption(
    new Option("casing", "Casing type (e.g., 'pascal', 'snake', 'kebab')")
      .default("kebab")
      .choices(["pascal", "snake", "kebab"])
  )

  .description(
    "🎨 Generate a new FSD layer\n\nParameters:\n  - type: The type of layer to generate (e.g., 'page' | 'widget' | 'feature' | 'entity' | 'shared/ui')\n  - name: The name of the layer\n\nExample:\n  npx crafter generate page start-page\n"
  )
  .action((type, name, options) => {
    generate(type, name, options);
  });

program.parse(process.argv);
