import React from 'react';
import styles from "./tab2.module.css";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../state/list'



export default function Index() {

    // const [list, setList] = useRecoilState(todoListState);
    const todoList = useRecoilValue(filteredTodoListState);

    console.log(todoList);

    return(
        <div className={styles.layout}>
            <div className={styles.contents}>
                <ul className={styles.tabBox}>
                    <Link to="/">
                        <li>counter</li>
                    </Link>
                    <Link to="/list" className={styles.on}>
                        <li>비동기</li>
                    </Link>
                </ul>
                <div className={styles.listBox}>
                    {/* <div>{list}</div> */}
                </div>
            </div>
        </div>
    )
}