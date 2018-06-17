import createReducer from './helpers/reducerHelper'
import {SET_CONFIG_DATA_ACTION, DISCONNECT_ACTION} from "../actions/types";

const initialState = {
    ethUrl: 'ws://localhost:8545',
    contractAddr: '',
    contractAbi: '',
    connected: false
};

const configReducer = createReducer(initialState,
    {

        [SET_CONFIG_DATA_ACTION](state, action) {
            return {
                ...state,
                ethUrl: action.data.ethUrl,
                contractAddr: action.data.contractAddr,
                contractAbi: action.data.contractAbi,
                connected: true
            };
        },

        [DISCONNECT_ACTION](state, action) {
            return {
                ...state,
                ethUrl: '',
                contractAddr: '',
                contractAbi: '',
                connected: false
            };
        }

    });

export default configReducer;