/** @type LanguageFn */

/* Made by Emma Skovgaard */

export default function (hljs) {
    return {
        name: 'CLIST',
        aliases: ['CLIST', 'Command List'],
        case_insensitive: false,
        keywords: {
            keyword: [
                "ATTN",
                "CLOSFILE",
                "CONTROL",
                "DO",
                "END",
                "ERROR",
                "EXIT",
                "GETFILE",
                "GLOBAL",
                "GOTO",
                "IF",
                "THEN",
                "ELSE",
                "LISTDSI",
                "NGLOBAL",
                "OPENFILE",
                "PROC",
                "PUTFILE",
                "READ",
                "READDVAL",
                "RETURN",
                "SELECT",
                "SET",
                "SYSCALL",
                "SYSREF",
                "TERMIN",
                "TERMING",
                "WRITE",
                "WRITENR",
            ],
            built_in: [
                "&DATATYPE",
                "&EVAL",
                "&LENGTH",
                "&NRSTR",
                "&STR",
                "&SUBSTR",
                "&SYSCAPS",
                "&SYSCLENGTH",
                "&SYSCSUBSTR",
                "&SYSDSN",
                "&SYSINDEX",
                "&SYSLC",
                "&SYSNSUB",
                "&SYSONEBYTE",
                "&SYSTWOBYTE",
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