# config-demo

Example CLI for testing `--config` option merging.

## Run

```sh
pnpm --filter config-demo config-demo deploy --config ./examples/config/incur.config.json
```

Expected output uses config defaults:

```txt
command: deploy
options:
  branch: release
  dryRun: true
  retries: 3
```

CLI flags override config values:

```sh
pnpm --filter config-demo config-demo deploy --config ./examples/config/incur.config.json --branch hotfix
```

Nested command path lookup:

```sh
pnpm --filter config-demo config-demo project create --config ./examples/config/incur.config.json
```
