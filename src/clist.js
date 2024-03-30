/** @type LanguageFn */

/* Made by Emma Skovgaard */

export default function (hljs) {
    return {
        name: 'JCL',
        aliases: ['z/OS JCL', 'Job Control Language'],
        case_insensitive: false,
        keywords: {
            keyword: [

            ],
            built_in: [

            ],
            type: [

            ],
            meta: [

            ]
        },
        contains: [
            hljs.COMMENT(
                /\/\/\*.*/
            ),
            {
                scope: 'string',
                begin: "'", end: "'"
            },
            {
                scope: 'operator',
                begin: /(=|\*)/
            },
            {
                scope: 'number',
                begin: /\s([0-9]+(?:(\.)[0-9]+)*)/
            },
        ]
    }
}