import { create } from 'zustand'
import { combine } from 'zustand/middleware'

const useBearStore = create(
    combine({ selectedNodeId: '' }, (set) => ({
        setSelectedNodeId: (id: string) => set({ selectedNodeId: id }),
    })),
)

export default useBearStore