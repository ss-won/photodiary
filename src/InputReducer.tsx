import * as React from 'react';
import { images } from './pages/Upload';

type State = {
    title: string;
    desc: string;
    tags: string[];
    images: Array<images>;
};

type Action =
    | { type: 'CHANGE_INPUT'; name: string; value: string }
    | { type: 'RESET_INPUT' };

const initialInputs: State = {
    title: '',
    desc: '',
    tags: [],
    images: [],
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'RESET_INPUT':
            return initialInputs;
        default:
            throw new Error('Unhandled Action');
    }
}

type Dispatch = React.Dispatch<Action>;
const StateContext = React.createContext<State | null>(null);
const DispatchContext = React.createContext<Dispatch | null>(null);

type ProviderProps = {
    children: React.ReactNode;
};

export function Provider({ children }: ProviderProps) {
    const [state, dispatch] = React.useReducer(reducer, initialInputs);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export function useInputState() {
    const state = React.useContext(StateContext);
    if (!state) throw new Error('Cannot find StateContext');
    return state;
}

export function useInputDispatch() {
    const dispatch = React.useContext(DispatchContext);
    if (!dispatch) throw new Error('Cannot find DispatchContext');
    return dispatch;
}
