import { useState } from 'react';
import '../css/Money_Cal.css';

const Money_Calculator =()=>{
    const [inputText, setInputText] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [legName, setLegName] = useState("");
 

    const ChangeText =()=>{
        // 직업각인---------------------------------------------------------------------------------------------
        if(inputText==="만월" || inputText==="만집" ||inputText==="만월의집행자"){setInputText("만월의 집행자");}
        if(inputText==="그믐" || inputText==="그경" ||inputText==="그믐의경계"){setInputText("그믐의 경계");}
        if(inputText==="축오" || inputText==="축복의오라"){ setInputText("축복의 오라");}
        if(inputText==="예둔" || inputText==="예리한둔기"){setInputText("예리한 둔기");}
        if(inputText==="돌대" || inputText==="돌격 대장"){setInputText("돌격대장");}
        if(inputText==="타대" || inputText==="타격의대가"){ setInputText("타격의 대가");}
        if(inputText==="저받" || inputText==="저주받은인형"){ setInputText("저주받은 인형");}
        if(inputText==="절구" || inputText==="절실한구원"){ setInputText("절실한 구원");}
        if(inputText==="기습의대가"){setInputText("기습의 대가");}
        if(inputText==="질증" || inputText==="질량증가"){setInputText("질량 증가");}
        if(inputText==="멈출수없는충동" ){setInputText("멈출 수 없는 충동");}
        if(inputText==="피메" ){setInputText("피스메이커");}
        if(inputText==="상소" || inputText==="상급소환사" ){setInputText("상급 소환사");}
        if(inputText==="잔재" || inputText==="잔재된기운" ){setInputText("잔재된 기운");}
        if(inputText==="고기" || inputText==="고독한기사" ){setInputText("고독한 기사");}
        if(inputText==="선필"){setInputText("선수필승");}
        if(inputText==="분망" ||inputText ==="분노의망치"){setInputText("분노의 망치");}
        if(inputText==="죽습" ||inputText ==="죽음의습격"){setInputText("죽음의 습격");}
        if(inputText==="정흡" ||inputText ==="정기흡수"){setInputText("정기 흡수");}
        if(inputText==="중착" ||inputText ==="중갑착용"){setInputText("중갑 착용");}
        if(inputText==="두동" ||inputText ==="두번째동료"){setInputText("두 번째 동료");}
        if(inputText==="유산" ||inputText ==="진유" || inputText==="진화의유산"){setInputText("진화의 유산");}
        if(inputText==="급타" ||inputText ==="급소타격"){setInputText("급소 타격");}
        if(inputText==="사시" ||inputText ==="사냥의시간"){setInputText("사냥의 시간");}
        if(inputText==="일필" ){setInputText("일격필살");}
        if(inputText==="황칙" || inputText==="황제의칙령" ){setInputText("황제의 칙령");}
        if(inputText==="슈차" || inputText ==="슈퍼차지" ){setInputText("슈퍼 차지");}
        if(inputText==="중수" || inputText ==="중력수련" ){setInputText("중력 수련");}
        if(inputText==="황은" || inputText ==="황후의은총" ){setInputText("황후의 은총");}
        if(inputText==="결대" || inputText ==="결투의대가" ){setInputText("결투의 대가");}
        if(inputText==="역지" || inputText ==="역천" ){setInputText("역천지체");}
        if(inputText==="속속" ){setInputText("속전속결");}
        if(inputText==="충단" || inputText === "충격단련" ){setInputText("충격 단련");}
        if(inputText==="달소" || inputText === "달의소리" ){setInputText("달의 소리");}
        if(inputText==="정단" || inputText === "정밀단도" ){setInputText("정밀 단도");}
        if(inputText==="교감" || inputText === "넘치는교감" ){setInputText("넘치는 교감");}
        if(inputText==="화강" || inputText === "화력강화" ){setInputText("화력 강화");}
        if(inputText==="완억" || inputText === "완벽한억제" ){setInputText("완벽한 억제");}
        if(inputText==="기술" || inputText === "아르데타인의기술" ){setInputText("아르데타인의 기술");}
        if(inputText==="진용" || inputText === "진실된용맹" ){setInputText("진실된 용맹");}
        if(inputText==="포강" || inputText === "포격강화" ){setInputText("포격 강화");}
        if(inputText==="전태" || inputText === "전투태세" ){setInputText("전투 태세");}
        if(inputText==="강무" || inputText === "강화무기" ){setInputText("강화무기");}
        if(inputText==="난무" ){setInputText("오의난무");}
        if(inputText==="구동" ){setInputText("구슬동자");}
        if(inputText==="안상" || inputText === "안정된상태" ){setInputText("안정된 상태");}
        if(inputText==="최마증" || inputText === "최대마나증가" ){setInputText("최대 마나 증가");}
        if(inputText==="비기" || inputText === "광전사의비기" ){setInputText("광전사의 비기");}
        if(inputText==="달인의저력"){setInputText("달인의 저력");}
        if(inputText==="실드관통"){setInputText("실드 관통");}
        if(inputText==="시집" || inputText === "시선집중"){setInputText("시선 집중");}
        if(inputText==="번분" || inputText === "번개의분노"){setInputText("번개의 분노");}
        if(inputText==="부뼈" || inputText === "부러진뼈"){setInputText("부러진 뼈");}
        if(inputText==="마나의흐름"){setInputText("마나의 흐름");}
        if(inputText==="여신의가호"){setInputText("여신의 가호");}
        if(inputText==="강화방패"){setInputText("강화 방패");}
        if(inputText==="위기모면"){setInputText("위기 모면");}
        if(inputText==="굳은의지"){setInputText("굳은 의지");}
        if(inputText==="탈출의명수"){setInputText("탈출의 명수");}
        if(inputText==="분쇄의주먹"){setInputText("분쇄의 주먹");}
        if(inputText==="약무" || inputText === "약자무시"){setInputText("약자 무시");}
        if(inputText==="에포" || inputText === "에테르포식자"){setInputText("에테르 포식자");}
        if(inputText==="폭전" || inputText === "폭발물전문가"){setInputText("폭발물 전문가");}
        if(inputText==="마효증" || inputText === "마나효율증가"){setInputText("마나 효율 증가");}
        


    }
    ChangeText();
    const handleFormSubmit = async(e)=>{
        e.preventDefault()
    
    
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
                "ItemName": inputText,
                "PageNo": 1,
                "SortCondition": "ASC"
            })
        }

        fetch(url,options)
        .then((response) => response.json())
        .then((data) => {
            for(var i = 0; i<data.Items.length; i++) {
                console.log(data.Items[i].Name + " = " + data.Items[i].CurrentMinPrice)
                setMinPrice(data.Items[i].CurrentMinPrice);
                setLegName(data.Items[i].Name);
            }
        })
    }

    return(
        <>
            <div className='Money_Cal_div'>
                    <div className='Money_Cal'>
                        <div className='Money_Cal_Formdiv'>
                            <h3 className='Money_Cal_name'>경매 계산기</h3>
                            <form className="Money_Cal_submit" onSubmit={handleFormSubmit} >
                                <input 
                                    type="text" 
                                    placeholder='전설 각인서 입력' 
                                    onChange={event => {setInputText(event.target.value);}}
                                />
                                <button type="submit" >검색</button>
                            </form>
                            <br/>
                            <a> {legName} 현재 최저가 <b>{minPrice}G</b></a><br/><br/><br/>
                            
                            <a>4인 경매</a> <hr/>
                            <a> 최대 이득 입찰가 <b>{(minPrice*0.66).toFixed(0)}G</b> </a><br/>
                            <a> N빵 입찰가 <b>{(minPrice*0.7125).toFixed(0)}G</b> </a>
                            

                            <br/><br/><br/>
                            <a>8인 경매</a> <hr/>

                            <a> 최대 이득 입찰가 <b>{(minPrice*0.77).toFixed(0)}G</b></a><br/>
                            <a> N빵 입찰가 <b>{(minPrice*0.83125).toFixed(0)}G</b></a>
                        </div>

                    </div>
            </div>
        </>
    )
};

export default Money_Calculator;