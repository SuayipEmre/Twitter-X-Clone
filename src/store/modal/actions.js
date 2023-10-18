
import {_setModal, _removeModal} from "~/store/modal";
import { store } from "..";

export const setModal = (name, data = false) => store.dispatch(_setModal({name, data}))
export const removeModal = () => store.dispatch(_removeModal())