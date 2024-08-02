import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ContactItem from '../ContactItem/ContactItem';

const testUser = [
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
    {
        "id": "66aa07c88ad146656d832c21",
        "record_type": "person",
        "fields": {
            "email": [
                {
                    "label": "email",
                    "modifier": "other",
                    "value": "teste@exemplo.us",
                    "is_primary": false
                }
            ],
            "first name": [
                {
                    "label": "first name",
                    "modifier": "",
                    "value": "João",
                    "is_primary": false
                }
            ],
            "last name": [
                {
                    "label": "last name",
                    "modifier": "",
                    "value": "Souza Silva",
                    "is_primary": false
                }
            ]
        },
        "owner_id": null,
        "children": [],
        "employers_info": [],
        "updated": "2024-08-02T10:55:12.484136",
        "created": "2024-07-31T09:45:44.481522",
        "updater": null,
        "creator": "Nimble Test",
        "avatar_url": "https://live.devnimble.com/api/avatars/person_default",
        "tags": [
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "fgasdas"
            },
            {
                "id": "5df60a4c5ac6bf48f1b8cd30/fgasdas",
                "tag": "Tag1"
            },
        ]
    },
]


const ContactList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Set the data from the testUser for demonstration purposes
        const users = testUser.map((user) => {
            return {
                avatar: user.avatar_url,
                firstName: user.fields['first name']?.[0]?.value || '',
                lastName: user.fields['last name']?.[0]?.value || '',
                email: user.fields.email?.[0]?.value || '',
                tags: user.tags.map(tag => tag.tag) || []
            };
        });

        // Simulate loading state
        setLoading(true);
        setData(users);
        setLoading(false);

        // Uncomment and use the following code when fetching real data from an API
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/contacts', {
        //             headers: {
        //                 'Authorization': 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn'
        //             }
        //         });
        //         setData(response.data);
        //     } catch (err) {
        //         setError(err);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='mt-9 md:mx-0 md:w-2/3'>
            <h2 className='text-xl font-medium mb-3 ml-[-5px]'>Contacts</h2>
            <div className='flex flex-col gap-6'>
                {data.length > 0 ? (
                    data.map((user, index) => (
                        <ContactItem key={`${user.email}${index}`} user={user} />
                    ))
                ) : (
                    <p>No contacts available</p>
                )}
            </div>
        </div>
    );
};

export default ContactList;