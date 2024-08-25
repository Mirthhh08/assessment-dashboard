import { create } from "zustand";
import { cspmExecutiveDashboard, cwppDashboard, registryScan } from "../data/data";
const useStore = create((set) => ({
    isActive: "cspm",
    widgetMenu: false,
    categories: {
        cspm: cspmExecutiveDashboard,
        cwpp: cwppDashboard,
        registry: registryScan

    },

    // addWidget: (category, widget) =>
    //     set((state) => ({
    //         categories: {
    //             ...state.categories,
    //             [category]: [...state.categories[category], widget],
    //         },
    //     })),


    // removeWidget: (category, widgetId) =>
    //     set((state) => ({
    //         categories: {
    //             ...state.categories,
    //             [category]: state.categories[category].filter(widget => widget.id !== widgetId),
    //         },
    //     })),


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

    toggleWidgetMenu: (str = "cspm") => {
        set((state) => ({
            widgetMenu: !state.widgetMenu,
            isActive: str
        }))
    }

}))

export default useStore;