export const cspmExecutiveDashboard = [
    {
        "id": 1,
        "title": "Cloud Accounts",
        "isVisible": true,
        "total": 2,
        "data": {
            "labels": ["Connected", "Not Connected"],
            "datasets": [
                {
                    "label": "Cloud Accounts",
                    "data": [2, 2],
                    "backgroundColor": ["#557aff", "#e5ebff"],
                    "hoverOffset": 4,
                    "borderWidth": 2
                }
            ],
        },
    },
    {
        "id": 2,
        "title": "Cloud Account Risk Assessment",
        "isVisible": true,
        "total": 9659,
        "data": {
            "labels": ["Failed", "Warning", "Not Available", "Passed"],
            "datasets": [
                {
                    "label": "Risk Assessment",
                    "data": [1689, 681, 36, 7253],
                    "backgroundColor": ["#e74c3c", "#f39c12", "#d2d7e3", "#27ae60"],
                    "hoverOffset": 4,
                    "borderWidth": 2
                }
            ],
        },
    },
]


export const cwppDashboard = []

export const registryScan = [
    {
        "id": 1,
        "title": "Image Risk Assessment",
        "isVisible": true,
        "total": 1470,
        "data": {
            "labels": [""],
            "datasets": [
                {
                    label: 'Critical',
                    data: [19],
                    backgroundColor: '#ff1a1a',
                  },
                  {
                    label: 'High',
                    data: [150],
                    backgroundColor: '#ff751a',
                  },
                  {
                    label: 'Medium',
                    data: [700],
                    backgroundColor: '#ffaa1a',
                  },
                  {
                    label: 'Low',
                    data: [611],
                    backgroundColor: '#ffd11a',
                  },
                  {
                    label: 'Low',
                    data: [10],
                    backgroundColor: '#aaaaaa',
                  }
            ],
        },
    },
    {
        "id": 2,
        "title": "Image Security Issues",
        "isVisible": true,
        "total": 2,
        "data": {
            "labels": [""],
            "datasets": [
                {
                    label: 'Critical',
                    data: [2],
                    backgroundColor: '#ff1a1a',
                  },
                  {
                    label: 'High',
                    data: [2],
                    backgroundColor: '#ff751a',
                  },
                  {
                    label: 'Medium',
                    data: [2],
                    backgroundColor: '#ffaa1a',
                  },
                  {
                    label: 'Low',
                    data: [1],
                    backgroundColor: '#ffd11a',
                  },
            ],
        },
    },
]