export default {
    "type": "document",
    "name": "config",
    "title": "Config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Color Palette",
            "initialValue": "blue",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "blue",
                    "cyan",
                    "green",
                    "red"
                ]
            }
        },
        {
            "type": "object",
            "name": "palettes",
            "title": "Palettes",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "palette",
                    "name": "blue",
                    "title": "Blue",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "cyan",
                    "title": "Cyan",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "green",
                    "title": "Green",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "red",
                    "title": "Red",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "site-metadata.json"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}