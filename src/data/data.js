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
            "labels": ["Critical", "High", "Medium", "Low"],
            "datasets": [
                {
                    "label": "Image Risk",
                    "data": [9, 150, 673, 638],
                    "backgroundColor": ["#c0392b", "#e74c3c", "#f39c12", "#f1c40f"],
                    "hoverOffset": 4,
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
            "labels": ["Critical", "High", "Medium", "Low"],
            "datasets": [
                {
                    "label": "Security Issues",
                    "data": [2, 2, 2, 1],
                    "backgroundColor": ["#c0392b", "#e74c3c", "#f39c12", "#f1c40f"],
                    "hoverOffset": 4,
                }
            ],
        },
    },
]