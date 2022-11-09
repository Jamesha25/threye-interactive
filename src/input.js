export const INPUT = [
    {
        key: "Road",
        type: "Action",
        color: "red",
        values: [
            {
                key: "lane",
                type: "number",
                value: ""
            },
            {
                key: "markings",
                type: "string",
                value: ""
            },
            {
                key: "divider",
                type: "boolean",
                value: ""
            }
        ]
    },
    {
        key: "light",
        type: "Action",
        color: "green",
        values: [
            {
                key: "color",
                type: "string",
                value: ""
            },
            {
                key: "height",
                type: "string",
                value: ""
            },
            {
                key: "state",
                type: "enum",
                value: [
                    "on",
                    "off"
                ]
            }
        ]
    }
]
