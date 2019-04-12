import { SET_SOURCE_LIST } from '../constants/CONSTANTS';

export function setSourceList(sourceList) {
    return {
        type: SET_SOURCE_LIST,
        payload: sourceList,
    }
}

