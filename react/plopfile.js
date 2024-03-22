const templatesDir = 'templates'

export default function (
    /** @type {import('plop').NodePlopAPI} */
    plop
) {
    plop.setGenerator('component', {
        description: 'Generate a react component',

        // inquirer prompts
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name?'
            },
            {
                type: 'confirm',
                name: 'styled',
                message: 'Create style?',
                default: false
            }
        ],

        // actions to perform
        actions: [
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/{{properCase name}}.tsx',
                templateFile: `${templatesDir}/component/main.hbs`
            },
            {
                type: 'add',
                path: 'src/components/{{properCase name}}/{{properCase name}}.module.css',
                templateFile: `${templatesDir}/component/style.hbs`,
                skip: ({ styled }) => (styled ? undefined : 'Skipping style creation')
            }
        ]
    })

    plop.setGenerator('view', {
        description: 'Generate a react view component to use with routes',

        // inquirer prompts
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'View name?'
            },
            {
                type: 'confirm',
                name: 'styled',
                message: 'Create style?',
                default: false
            }
        ],

        // actions to perform
        actions: [
            {
                type: 'add',
                path: 'src/views/{{properCase name}}View/{{properCase name}}View.tsx',
                templateFile: `${templatesDir}/view/main.hbs`
            },
            {
                type: 'add',
                path: 'src/views/{{properCase name}}View/{{properCase name}}View.module.css',
                templateFile: `${templatesDir}/view/style.hbs`,
                skip: ({ styled }) => (styled ? undefined : 'Skipping style creation')
            }
        ]
    })

    plop.setGenerator('store', {
        description: 'Generate a new Zustand store',

        // inquirer prompts
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Store name?'
            }
        ],

        // actions to perform
        actions: [
            {
                type: 'add',
                path: 'src/stores/{{lowerCase name}}.ts',
                templateFile: `${templatesDir}/store/main.hbs`
            }
        ]
    })
}
