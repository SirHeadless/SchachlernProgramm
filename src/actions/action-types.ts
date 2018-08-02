import { Coordinate } from '../store/classes/gameField/Coordinate';
import { createAction } from 'redux-actions';

export namespace OwnActions {
    export enum ActionTypes {
        HANDLE_FIELD_CLICK = 'activate_field',
        DEACTIVATE_FIELD = 'deactivate_field'
    }

    export const handleFieldClick = createAction<Coordinate>(ActionTypes.HANDLE_FIELD_CLICK);
    export const deactivateField = createAction<Coordinate>(ActionTypes.DEACTIVATE_FIELD);

}
