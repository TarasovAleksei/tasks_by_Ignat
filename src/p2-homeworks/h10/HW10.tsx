import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    const {loading} = useSelector<AppStoreType, initStateType>(state => state.loading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(() => {
            dispatch(loadingAC(false))
            console.log('not loading...')
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <hr/>
            {loading
                ? (<div><img style={{
                    width: "90px",
                }} src='https://www.blackview.ru/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif'
                             alt="loader"/></div>) : (
                    <div>
                        <SuperButton style={{cursor: 'pointer'}} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
            <hr/>
        </div>
    )
}

export default HW10
