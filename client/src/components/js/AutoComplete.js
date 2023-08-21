import { useState, useEffect } from 'react';
import styled from 'styled-components';

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';


export const InputContainer = styled.div`
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  z-index: 3;
  box-shadow: 0;
  

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
   
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  width : 305px;
  background-color:rgb(0, 0, 0);
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;

    &.selected {
      background-color: lightgray;
    }
  }
`;

const deselectedOptions = [
    '오의 강화',
    '오의난무',
    '화력 강화',
    '포격 강화',
    '강화 무기',

  ];

  export const Autocomplete = ({getInput}) => {
    const [hasText, setHasText] = useState(false);
    // input에 입력값이 존재하는지 확인하는 용도
    const [inputValue, setInputValue] = useState('');
    // 입력 받은 input값을 저장하는 용도
    const [options, setOptions] = useState(deselectedOptions);
    // 자동완성으로 보여줄 값들을 저장하는 용도

    
    useEffect(() => {
      if (inputValue === '') {
        setHasText(false);
        setOptions([]);
      }
      else {
        setOptions(deselectedOptions.filter((option) => {
          return option.includes(inputValue)
        }))
      }
    }, [inputValue]);
    // input을 입력할 때마다, input을 포함(includes)한 요소들만 모아 options 배열 업데이트
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      setHasText(true);
      getInput(event.target.value);
      
    };
    // input의 onChange 이벤트 때, 입력값을 inputValue에 저장하고 hasText값 갱신
    
    
    const handleDropDownClick = (clickedOption) => {
      setInputValue(clickedOption);
      getInput(clickedOption);
      setHasText(false);
    
      document.getElementById("input").focus();
    };
    // 보여지는 자동완성 값 중 하나를 클릭하면 해당 값이 input에 할당
  
    const handleDeleteButtonClick = (event) => {
      setInputValue('');
    };
    // 삭제 버튼을 누르면, inputValue를 초기화
  
    return (
    <>
        <input id="input"onChange={handleInputChange} value={inputValue} placeholder='전설 각인서 입력'></input>
        {/* <div className='delete-button' onClick={handleDeleteButtonClick}>&times;</div> */}
        {hasText && <DropDown options={options} handleComboBox={handleDropDownClick} />}
      </>
    );
  };
  

  /* 자동완성 배열(options)에 들어간 값들이 드롭다운으로 보여지는 부분 */
  export const DropDown = ({ options, handleComboBox, selected }) => {
    return (
      <DropDownContainer className="DropDown">
        {options.map((option, index) => {
          return (
            <li key = {index}
            onClick = {() => handleComboBox(option)}>
              {option}
            
            </li>
          )
        })}
      </DropDownContainer>
    );
  };
  