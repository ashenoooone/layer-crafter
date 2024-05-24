# Layer Crafter 🎨

Layer Crafter is a tool for generating layers following the Feature-Sliced Design (FSD) methodology.

## Installation

You can install Layer Crafter globally or use it locally in your project.

### Global Installation

```bash
npm install -g layer-crafter
```

### Local Installation in Your Project

```bash
npm install layer-crafter
```

## Usage

Layer Crafter provides the `crafter` command, which you can use to generate various layers in your project.

### The `generate` Command

To generate a new layer, use the `generate` command:

```bash
npx crafter generate <type> <name> [options]
```

where `<type>` is the type of the layer to generate (e.g., 'page', 'component', 'widget', 'feature', 'entity', 'shared/ui'), and `<name>` is the name of the layer.

Example usage to create a new page:

```bash
npx crafter generate page start-page
```

This will generate the following structure in your `src/pages/start-page` directory:

```
src/
  └── pages/
      └── start-page/
          ├── index.ts
          └── ui/
              └── start-page.tsx
```

### Case Conversion Options

Layer Crafter supports different types of case conversions for the generated layer names. You can specify the case type using the `--case` or `--c` option. The supported case types are:

- `kebab`: Converts the name to kebab-case (e.g., `start-page`).
- `pascal`: Converts the name to PascalCase (e.g., `StartPage`).
- `snake`: Converts the name to snake_case (e.g., `start_page`).

Example usage to create a new page with PascalCase naming:

```bash
npx crafter generate page start-page --case pascal

OR

npx crafter generate page start-page --c pascal

```

## Contributing

If you find a bug or want to contribute to the development of the project, please read our [CONTRIBUTING.md](CONTRIBUTING.md) and join us!

## Contact

If you have any questions or suggestions, please create a new issue in the [issue tracker](https://github.com/ashenoooone/layer-crafter/issues).

## License

Layer Crafter is distributed under the [MIT License](LICENSE).
