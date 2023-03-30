import {create} from "zustand"

export const useDrawerStore = create((set)=>({
show:false,
showDrawer : ()=>set(state=>({show:true})),
closeDrawer : ()=>set(state=>({show:false}))
}))

