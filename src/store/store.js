import { create } from "zustand";
import { cspmExecutiveDashboard, cwppDashboard, registryScan } from "../data/data";
const useStore = create((set) => ({
    searchResults: {},
    isActive: "cspm",
    widgetMenu: false,
    categories: {
        cspm: cspmExecutiveDashboard,
        cwpp: cwppDashboard,
        registry: registryScan

    },

    changeIsActive: (str = "cspm") =>
        set(() => ({
            isActive: str
        })),

    toggleisVisble: (category, widgetId) =>
        set((state) => ({
            categories: {
                ...state.categories,
                [category]: state.categories[category].map((item) => {
                    if (item.id === widgetId) {

                        return {
                            ...item,
                            isVisible: !item.isVisible
                        }
                    } return item
                })
            }
        })),

    toggleWidgetMenu: (str) =>
        set((state) => ({
            widgetMenu: !state.widgetMenu,
            isActive: str
        })),

    searchWidgets: (searchTerm) =>
        set((state) => {
            const result = {};
            Object.keys(state.categories).forEach(category => {
                result[category] = state.categories[category].filter(widget =>
                    widget.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
            return { searchResults: result };
        }),

}))

export default useStore;