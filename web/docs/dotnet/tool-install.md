# Tool Installation

Use this guide to locally install tools. In some cases, globally installed tools may fail to work or have different versions than the ones used for the build.

## Initialize Manifest

```bash
dotnet new tool-manifest
```

This adds a `dotnet-tools.json` file to the project under the `.config` folder.

Contents of `dotnet-tools.json`:

```json
{
  "version": 1,
  "isRoot": true,
  "tools": {}
}
```

## Install Tools

For the example, let's install `dotnet-aspnet-codegenerator`:

```bash
dotnet tool install --local dotnet-aspnet-codegenerator
```

Now the tool is installed and the `dotnet-tools.json` file is updated:

```json
{
  "version": 1,
  "isRoot": true,
  "tools": {
    "dotnet-aspnet-codegenerator": {
      "version": "5.0.0",
      "commands": [
        "dotnet-aspnet-codegenerator"
      ]
    }
  }
}
```

## Run Tools

Normally globally installed tools can be run with the `dotnet` command. Locally installed tools need to be run with the `dotnet tool run` command.

To run the tool, use the `dotnet` command:

```bash
dotnet tool run dotnet-aspnet-codegenerator [options]
```
