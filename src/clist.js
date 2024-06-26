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
                /\/\*/,
                /\*\//
            ),
            {
                scope: 'string',
                begin: "'", end: "'"
            },
            {
                scope: 'operator',
                begin: /(\+| - |\*\*|\*|\/\/|\/|\**\|\*\|>=|<=|¬<|¬>|>|<|¬==|=|¬=| EQ | NE | LT | GT | LE | GE | NG | NL | AND | && | OR )/
            },
            {
                scope: 'number',
                begin: /\b(\d+)\b/
            },
            {
                scope: 'variable',
                begin: /(&\w+)/
            }
        ]
    }
}