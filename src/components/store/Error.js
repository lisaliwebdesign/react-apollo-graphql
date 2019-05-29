import { computed, observable } from "mobx"

export class ErrorStore {
    @observable error = ""

}

export default new ErrorStore
