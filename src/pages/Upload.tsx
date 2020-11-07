import * as React from 'react';
import UploadFrame from '../Components/UploadFrame';
import { Provider } from '../InputReducer';

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
/* =============File 유효성 검사============ */
const fileTypes = [
    'image/apng',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/svg+xml',
    'image/tiff',
    'image/webp',
    'image/x-icon',
];

function validFileType(file: File) {
    return fileTypes.includes(file.type);
}
/* ==================================== */

/* =======이미지 파일 배열 reducer 함수 및 변수 타입 alias 설정======== */
export type images = {
    name: string;
    type: string;
    size: number;
    src: string;
};

type action =
    | { type: 'INPUT_CHANGE'; data: Array<images> }
    | { type: 'INPUT_RESET' };

const reducer = (state: Array<images>, action: action): Array<images> => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return action.data ? action.data : state;
        case 'INPUT_RESET':
            return [];
        default:
            throw new Error(`Unhandled Action Type ${action}`);
    }
};
/* =========================================================== */

function Upload() {
    const [images, dispatch] = React.useReducer(reducer, []);
    const fileInput = React.useRef<HTMLInputElement>(null);
    function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const files = e.target.files;
        let image: Array<images> = [];
        if (!files) {
            alert('파일이 선택되지 않았습니다.');
        } else {
            for (let i: number = 0; i < files?.length; i++) {
                if (!validFileType(files[i])) {
                    alert('잘못된 파일 형식입니다.');
                    e.target.value = '';
                    dispatch({ type: 'INPUT_RESET' });
                    if (fileInput.current) fileInput.current.focus();
                    return;
                }
                image = [
                    ...image,
                    {
                        name: files[i].name,
                        type: files[i].type,
                        size: files[i].size,
                        src: URL.createObjectURL(files[i]),
                    },
                ];
            }
            console.log(e.target.files);
            dispatch({ type: 'INPUT_CHANGE', data: image });
        }
    }

    return (
        <div>
            <h2>Upload</h2>
            <ul>
                {images.map((image, id) => (
                    <li key={id}>
                        {image.name}{' '}
                        <img
                            src={image.src}
                            alt="preview"
                            width="200px"
                            height="200px"
                        />
                    </li>
                ))}
            </ul>
            <input type="file" onChange={onChange} multiple />
            {images.length === 0 || (
                <Provider>
                    <UploadFrame />
                </Provider>
            )}
            <button>Submit</button>
        </div>
    );
}
export default Upload;
