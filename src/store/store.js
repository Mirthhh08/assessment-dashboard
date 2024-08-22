import { create } from "zustand";
import { cspmExecutiveDashboard, cwppDashboard, registryScan } from "../data/data";
const useStore = create((set) => ({

    categories: {
        cspmExecutiveDashboard: cspmExecutiveDashboard,
        cwppDashboard: cwppDashboard,
        registryScan: registryScan

    },

    addWidget: (category, widget) => {
        set((state) => ({
            categories: {
                ...state.categories,
                [category]: [...state.categories[category], widget],
            }
        }))
    },

    removeWidget: (category, widgetId) =>
        set((state) => ({
            categories: {
                ...state.categories,
                [category]: state.categories[category].filter(widget => widget.id !== widgetId),
            },
        })),

}))

export default useStore;