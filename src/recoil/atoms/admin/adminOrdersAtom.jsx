import { atom } from "recoil";

const adminOrdersAtom = atom({
    key: 'adminOrdersAtom',
    default: [],
});

export default adminOrdersAtom;