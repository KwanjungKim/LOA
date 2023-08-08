import '../css/Money_Cal.css';

const Money_Calculator =()=>{
    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        const {
            searchKeyword: { value },
        } = e.target;
        const url = 'https://developer-lostark.game.onstove.com/markets/items'
        const options = {
            method: 'post',
            headers: {
                "Content-Type" : 'application/json',    
                authorization : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyOTQ0ODQifQ.Yei6-OelSW1b-H2keZak8YGsnaSPzlM7rQJd7mm9PBYzREYXTZBzScj54-iJniELyBVr4xSCf5gEwhWnqlIPf1xfocmFrou9gOECaRi7cGh9-YLadt5zrweynztKD-B-L64L8GFy5g-AJiiyBw0ViaYCSL57RQ_SvXNUjEL1B_EwoGypXz_tOB03bEQxhal_zEuQTFE2odmtskEd21i2Ytt0q8bdohihhIkIJe9pMesvKAhd49Kj3jj1d5e4KRFQM6ynMrTmoj1AtEtFAWdSI17Wfm1ZVZ04UsBuZgO17rypyu1MvrCpz1cmN0SMFkRGWose8I6wO_NSRl5RTnARSw'
            },
            body: JSON.stringify({
                "Sort": "GRADE",
                "CategoryCode": 40000,
                "CharacterClass": null,
                "ItemTier": null,
                "ItemGrade": "전설",
                "ItemName": value,
                "PageNo": 1,
                "SortCondition": "ASC"
            })
        }

        fetch(url,options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.Items[0].RecentPrice)
        })
    }

    return(
        <>
            <div className='Money_Cal_div'>
                    <div className='Money_Cal'>
                        <div>
                            <h3 className='Money_Cal_name'>경매 계산기</h3>
                            <form className="Money_Cal_submit" onSubmit={handleFormSubmit} >
                                <input 
                                    className='Money_Cal_input' 
                                    name="searchKeyword"
                                    type="text" 
                                    placeholder='입력' 
                                />
                                <input className='Money_Cal_input' type="submit" value="검색" />
                            </form>
                        </div>

                    </div>
            </div>
        </>
    )
};

export default Money_Calculator;