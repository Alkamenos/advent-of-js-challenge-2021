import React, {useEffect, useState} from 'react';
import styles from './Keyboard.module.css';
import classnames from 'classnames';

Keyboard.propTypes = {};

const defaultParms = {isUtility: false};
const keyboardRows = [
    [
        ...'`1234567890-='.split('').map((key) => ({...defaultParms, key, title: key})),
        {...defaultParms, key: 'BACKSPACE', title: 'DEL', isUtility: true}
    ],
    [
        {...defaultParms, key: 'TAB', title: 'Tab', isUtility: true},
        ...'QWERTYUIOP[]\\'.split('').map((key) => ({...defaultParms, key, title: key}))
    ],
    [
        {...defaultParms, key: 'CAPSLOCK', title: 'CAPS', isUtility: true},
        ..."ASDFGHJKL;'".split('').map((key) => ({...defaultParms, key, title: key})),
        {...defaultParms, key: 'ENTER', title: 'ENTER', isUtility: true}
    ],
    [
        {...defaultParms, key: 'SHIFT', title: 'SHIFT', isUtility: true},
        ...'ZXCVBNM,./'.split('').map((key) => ({...defaultParms, key, title: key})),
        {...defaultParms, key: 'SHIFT', title: 'SHIFT', isUtility: true}
    ]
];

function Keyboard() {
    const [keyPos, setKeyPos] = useState([1, 3]);

    const check = (key) => {
        setKeyPos(([r, p]) => {
            if (keyboardRows[r][p].key === key) {
                const newRow = Math.floor(Math.random() * keyboardRows.length);
                const newPos = Math.floor(Math.random() * keyboardRows[newRow].length);
                return [newRow, newPos];
            }
            return [r, p];
        });
    };

    const handleKeypress = (e) => {
        check(e.key.toUpperCase());
    };

    const handleClick = (key) => () => {
        check(key);
    };

    useEffect(() => {
        document.addEventListener('keyup', handleKeypress);
        return () => {
            document.removeEventListener('keyup', handleKeypress);
        };
    }, []);

    return (
        <div className={styles.App}>
            <div className={styles.Keyboard}>
                <h1>Eyes on the Screen</h1>
                {keyboardRows.map((row, rowIndex) => (
                    <div className={styles.Row}>
                        {row.map((key, keyIndex) => (
                            <button
                                onClick={handleClick(key.key)}
                                className={classnames(styles.Key, {
                                    [styles.Utility]: key.isUtility,
                                    [styles.Jiggle]: rowIndex === keyPos[0] && keyIndex === keyPos[1]
                                })}
                            >
                                {key.title}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Keyboard;
