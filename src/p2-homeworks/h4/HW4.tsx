import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Field is empty'

    const showAlert = () => {
        error ? alert('введите текст...') : alert(text)
        setText('')
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4
            <hr/>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // spanClassName={s.testSpanError} -- worked
                />

                <SuperInputText
                    className={s.blue} //  -- worked
                />

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red={true} // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>
                <SuperButton disabled>
                    disabled
                </SuperButton>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    choose
                </SuperCheckbox>
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>
            <hr/>
        </div>
    )
}

export default HW4
