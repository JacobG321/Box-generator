import React, { useState } from 'react';
import styles from '../static/Form.module.css';

const Form = () => {
    
    const [color, setColor] = useState('')
    const [newColor, setNewColor] = useState([])

    const createColor = (e) => {
        e.preventDefault();
        
        const newAddition = {color}
        setNewColor([...newColor, newAddition])
        setColor('')
    }


    const handleColor = (e) => {
        setColor(e.target.value)
    }


    return (
        <div>
            <form onSubmit={createColor}>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" value={color} onChange={handleColor}/>
                <button type='submit'>Add</button>
            </form>

            <div className={styles.boxes}>
                {
                    newColor.map((item, index)=>
                        <div className={styles.box} key={index} style={{backgroundColor:item.color}}>
                            {item.color}
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}

export default Form