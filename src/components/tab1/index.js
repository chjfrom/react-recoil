import React, { useState } from 'react';
import styles from "./tab1.module.css";
import { Link } from "react-router-dom";
import { useRecoilState} from 'recoil';
import { counterState } from '../../state/counter'


export default function Index() {
    const [num, setNumber] = useRecoilState(counterState);
    const [state, setState] = useState({
        plus:1,
        minus:1
    });


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: Number(e.target.value)
        })
    };

    const handleClickPlus = () => {
        setNumber(num + (state.plus));
    };

    const handleClickMinus = () => {
        setNumber(num - (state.minus));
    };


    return(
        <div className={styles.layout}>
            <div className={styles.contents}>
                <ul className={styles.tabBox}>
                    <Link to="/" className={styles.on}>
                        <li>counter</li>
                    </Link>
                    <Link to="/list">
                        <li>비동기</li>
                    </Link>
                </ul>
                <div className={styles.listBox}>
                    <div className={styles.numBox}>{num}</div>
                    <div className={styles.counterBox}>
                        <div onClick={handleClickPlus}>+</div>
                        <div onClick={handleClickMinus}>-</div>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" name="plus" value={state.plus} onChange={handleChange} />
                        <input type="text" name="minus" value={state.minus} onChange={handleChange} />
                    </div>
                </div>
               
            </div>
        </div>
    )
}