import {Coordinate} from "../store/classes/gameField/Coordinate";
import {createAction} from "redux-actions";


export namespace OwnActions {
    export enum ActionTypes {
        ACTIVATE_FILED = 'activate_field',
        DEACTIVATE_FIELD = 'deactivate_field'
    }

    export const activateField = createAction<Coordinate>(ActionTypes.ACTIVATE_FILED);
    export const deactivateField = createAction<Coordinate>(ActionTypes.DEACTIVATE_FIELD);

    // export type OwnAction = {
    //     type: ActionTypes.ACTIVATE_FILED
    //     delta: Coordinate
    // } | {
    //     type: ActionTypes.DEACTIVATE_FIELD,
    //     delta: Coordinate
    // }

    // export const activateField = (delta: Coordinate): OwnAction => ({
    //     type: ActionTypes.ACTIVATE_FILED,
    //     delta,
    // })

    // export  const deactivateField = (delta: Coordinate): OwnAction => ({
    //     type: ActionTypes.DEACTIVATE_FIELD,
    //     delta,
    // })


}


