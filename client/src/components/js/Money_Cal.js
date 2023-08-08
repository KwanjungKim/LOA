import '../css/Money_Cal.css';
import { useState } from 'react';


const Money_Calculator =()=>{
    const [inputText, setInputText] = useState("");

    const handleFormSubmit =(e)=>{
        const formData = new FormData();
        formData.append('inputText', inputText);

        fetch("/주소",{
            method : "post",
            cache : "no-cache",
            body : formData,
        })
    }

    return(
        <>
            <div className='Money_Cal_div'>
                    <div className='Money_Cal'>
                        
                 
                        
                        <div>
                        <h3 className='Money_Cal_name'>경매 계산기</h3>
                        <form className="Money_Cal_submit" onSubmit={handleFormSubmit} >
                        <input className='Money_Cal_input' type="text" placeholder='입력' onChange={event => {setInputText(event.target.value)}}/>
                        <button className='Money_Cal_input' type="submit">검색</button>
                        </form>
                        </div>

                    </div>
            </div>
        </>
    )
};

export default Money_Calculator;