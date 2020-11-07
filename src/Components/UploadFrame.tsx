import * as React from 'react';
import { useInputDispatch, useInputState } from '../InputReducer';

function UploadFrame() {
    const state = useInputState();
    const dispatch = useInputDispatch();

    const onChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE_INPUT', name: name, value: value });
    };
    return (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="제목"
                    name="title"
                    onChange={onChange}
                />
            </div>
            <div>
                <textarea
                    maxLength={100}
                    rows={3}
                    placeholder="내용"
                    name="desc"
                    onChange={onChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="태그"
                    name="tags"
                    onChange={onChange}
                />
            </div>
        </form>
    );
}

export default UploadFrame;
