require("dotenv")

var express = require('express');
var app = express();

app.post('/', function(req,res) {
   
    res.send(
        {
            "blocks": [
                {
                    "type": "input",
                    "element": {
                        "type": "static_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select a customer",
                            "emoji": true
                        },
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Claro",
                                    "emoji": true
                                },
                                "value": "value-0"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Banco do Brasil",
                                    "emoji": true
                                },
                                "value": "value-1"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Banco Santander",
                                    "emoji": true
                                },
                                "value": "value-2"
                            }
                        ],
                        "action_id": "static_select-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Accrual Status",
                        "emoji": true
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": " "
                    },
                    "accessory": {
                        "type": "checkboxes",
                        "options": [
                            {
                                "text": {
                                    "type": "mrkdwn",
                                    "text": "Engage Submitted"
                                },
                                "value": "value-0"
                            },
                            {
                                "text": {
                                    "type": "mrkdwn",
                                    "text": "Engage Approved"
                                },
                                "value": "value-1"
                            },
                            {
                                "text": {
                                    "type": "mrkdwn",
                                    "text": "Voucher Submitted"
                                },
                                "value": "value-2"
                            }
                        ],
                        "action_id": "checkboxes-action"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "System"
                    },
                    "accessory": {
                        "type": "radio_buttons",
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "GAT",
                                    "emoji": true
                                },
                                "value": "value-0"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "GLUI",
                                    "emoji": true
                                },
                                "value": "value-1"
                            }
                        ],
                        "action_id": "radio_buttons-action"
                    }
                },
                {
                    "type": "input",
                    "element": {
                        "type": "plain_text_input",
                        "action_id": "plain_text_input-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Voucher Number"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Voucher Creator"
                    },
                    "accessory": {
                        "type": "users_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select a user",
                            "emoji": true
                        },
                        "action_id": "users_select-action"
                    }
                }
            ]
        }
    );

});

app.listen(process.env.PORT||3000, function () {
    console.log('Executando na porta 3000');

});