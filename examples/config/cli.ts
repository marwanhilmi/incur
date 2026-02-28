import { Cli, z } from 'incur'

const cli = Cli.create('config-demo', {
  description: 'Example CLI for testing --config option merging',
})

cli.command('deploy', {
  description: 'Show merged deploy options',
  options: z.object({
    branch: z.string().default('main').describe('Git branch to deploy'),
    dryRun: z.boolean().default(false).describe('Run without deploying'),
    retries: z.number().default(1).describe('Retry attempts'),
  }),
  alias: { branch: 'b', dryRun: 'd' },
  run(c) {
    return { command: 'deploy', options: c.options }
  },
})

const project = Cli.create('project', {
  description: 'Project commands',
})

project.command('create', {
  description: 'Show merged project create options',
  options: z.object({
    region: z.enum(['us', 'eu']).default('us').describe('Target region'),
    private: z.boolean().default(false).describe('Create private project'),
  }),
  run(c) {
    return { command: 'project create', options: c.options }
  },
})

cli.command(project)

cli.serve()

export default cli
